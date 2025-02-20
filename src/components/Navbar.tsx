
import { ShoppingCart, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const Navbar = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/a459637c-5843-400d-a3e6-7b9efd5ac6f3.png" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-xl">TopUp</span>
        </Link>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="h-6 w-6" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <LogOut className="h-6 w-6" />
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button variant="default">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
