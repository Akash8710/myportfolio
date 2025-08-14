import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";
import { exportToCSV, importFromCSV, appendToCSV } from "@/utils/csvHandler";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Calendar, User, MessageSquare, Download, Upload, FileText } from "lucide-react";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const ContactMessages = () => {
  const [messages, setMessages] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [csvData, setCsvData] = useState<ContactSubmission[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setMessages(data || []);
      // Auto-append new messages to CSV
      if (data && data.length > 0) {
        const newMessages = data.filter(msg => !csvData.find(csvMsg => csvMsg.id === msg.id));
        if (newMessages.length > 0) {
          const updatedCsvData = [...csvData, ...newMessages];
          setCsvData(updatedCsvData);
          if (csvData.length > 0) { // Only export if there was existing CSV data
            exportToCSV(updatedCsvData, 'contactmsg.csv');
          }
        }
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "Failed to load contact messages. You may need to be authenticated.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = () => {
    exportToCSV(messages, 'contactmsg.csv');
    setCsvData(messages);
    toast({
      title: "Export Successful",
      description: "Contact messages exported to contactmsg.csv",
    });
  };

  const handleImportCSV = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        importFromCSV(file, (data) => {
          setCsvData(data);
          toast({
            title: "Import Successful",
            description: `Imported ${data.length} messages from CSV`,
          });
        });
      } catch (error) {
        toast({
          title: "Import Failed",
          description: "Failed to import CSV file. Please check the format.",
          variant: "destructive"
        });
      }
    }
  };

  const handleAppendToCSV = () => {
    if (messages.length > 0) {
      const updatedData = appendToCSV(messages[0], csvData);
      setCsvData(updatedData);
      toast({
        title: "Message Appended",
        description: "Latest message appended to contactmsg.csv",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Contact Messages
              <Badge variant="secondary">
                {messages.length} total
              </Badge>
            </CardTitle>
            <div className="flex gap-2">
              <Button
                onClick={handleExportCSV}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
              <Button
                onClick={handleImportCSV}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Import CSV
              </Button>
              {csvData.length > 0 && (
                <Button
                  onClick={handleAppendToCSV}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Append to CSV
                </Button>
              )}
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </CardHeader>
        <CardContent>
          {messages.length === 0 ? (
            <div className="text-center py-8">
              <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No contact messages yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Name</TableHead>
                    <TableHead className="w-[200px]">Email</TableHead>
                    <TableHead className="w-[200px]">Subject</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead className="w-[120px]">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((message) => (
                    <TableRow key={message.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          {message.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a 
                            href={`mailto:${message.email}`}
                            className="text-primary hover:underline"
                          >
                            {message.email}
                          </a>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {message.subject}
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs truncate" title={message.message}>
                          {message.message}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {formatDistanceToNow(new Date(message.created_at), { addSuffix: true })}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactMessages;