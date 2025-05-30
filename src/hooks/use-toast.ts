// This is a wrapper around sonner Toast
import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast";
import {
  useCallback,
  type ReactNode,
} from "react";
import { toast as sonnerToast } from "sonner";

type ToasterToast = ToastProps & {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ToastActionElement;
};

// Helper type to make our toast function support both sonner's API and our custom API
type ToastParameters = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
  duration?: number;
  action?: ToastActionElement;
};

// Custom hook for toast functionality that works with our expected interface
const useToast = () => {
  return {
    toast: (params: string | ToastParameters) => {
      // If the parameter is a string, use it as the message directly
      if (typeof params === 'string') {
        return sonnerToast(params);
      }
      
      // Otherwise, extract properties and map them to sonner's API
      const { title, description, variant, duration, action } = params;
      
      if (variant === "destructive") {
        return sonnerToast.error(title, {
          description,
          duration,
          action,
        });
      } else if (variant === "success") {
        return sonnerToast.success(title, {
          description,
          duration,
          action,
        });
      } else {
        return sonnerToast(title, {
          description,
          duration,
          action,
        });
      }
    },
    dismiss: (toastId?: string) => {
      if (toastId) {
        sonnerToast.dismiss(toastId);
      } else {
        sonnerToast.dismiss();
      }
    },
  };
};

// Export a standalone toast function with the same API as the hook's toast property
const toast = (params: string | ToastParameters) => {
  if (typeof params === 'string') {
    return sonnerToast(params);
  }
  
  const { title, description, variant, duration, action } = params;
  
  if (variant === "destructive") {
    return sonnerToast.error(title, {
      description,
      duration,
      action,
    });
  } else if (variant === "success") {
    return sonnerToast.success(title, {
      description,
      duration,
      action,
    });
  } else {
    return sonnerToast(title, {
      description,
      duration,
      action,
    });
  }
};

// Add success and error methods to match the common usage pattern
toast.success = (title: string, options?: Omit<ToastParameters, 'title' | 'variant'>) => {
  return sonnerToast.success(title, options);
};

toast.error = (title: string, options?: Omit<ToastParameters, 'title' | 'variant'>) => {
  return sonnerToast.error(title, options);
};

// Add other methods to match sonner's API
toast.info = sonnerToast.info;
toast.warning = sonnerToast.warning;
toast.loading = sonnerToast.loading;
toast.promise = sonnerToast.promise;
toast.dismiss = sonnerToast.dismiss;
toast.custom = sonnerToast.custom;

export { useToast, toast };
