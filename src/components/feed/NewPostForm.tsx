import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Image, X } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const NewPostForm = () => {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  
  const removeImage = () => {
    setSelectedImage(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() && !selectedImage) return;
    
    setIsSubmitting(true);
    
    // Simulate post creation
    setTimeout(() => {
      setIsSubmitting(false);
      setContent("");
      setSelectedImage(null);
      toast("Your post has been published!");
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="post-card mb-6">
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <Textarea
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 min-h-[80px]"
            />
            
            {selectedImage && (
              <div className="mt-3 relative">
                <img 
                  src={selectedImage} 
                  alt="Selected" 
                  className="w-full rounded-lg max-h-[300px] object-cover" 
                />
                <Button 
                  type="button"
                  variant="destructive" 
                  size="icon" 
                  className="absolute top-2 right-2 h-8 w-8 rounded-full"
                  onClick={removeImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="text-flair-purple"
                  >
                    <Image className="h-5 w-5" />
                  </Button>
                </label>
                <input 
                  id="image-upload" 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload}
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting || (!content.trim() && !selectedImage)}
                className="bg-gradient-to-r from-flair-purple-light to-flair-purple-dark hover:opacity-90"
              >
                {isSubmitting ? "Posting..." : "Post"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewPostForm;
