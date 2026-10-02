import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Folder as FolderIcon, FolderOpen as FolderOpenIcon, File as FileIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type GitStatus = "untracked" | "modified" | "deleted";

interface FilesContextValue {
  openValues: string[];
}

const FilesContext = React.createContext<FilesContextValue>({ openValues: [] });

export interface FilesProps {
  children: React.ReactNode;
  defaultOpen?: string[];
  open?: string[];
  onOpenChange?: (open: string[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function Files({
  children,
  defaultOpen = [],
  open,
  onOpenChange,
  className,
  style,
}: FilesProps) {
  const [internalOpen, setInternalOpen] = React.useState<string[]>(defaultOpen);
  const isControlled = open !== undefined;
  const currentOpen = isControlled ? open : internalOpen;

  const handleValueChange = (newValues: string[]) => {
    if (!isControlled) {
      setInternalOpen(newValues);
    }
    onOpenChange?.(newValues);
  };

  return (
    <FilesContext.Provider value={{ openValues: currentOpen }}>
      <AccordionPrimitive.Root
        type="multiple"
        value={currentOpen}
        onValueChange={handleValueChange}
        className={cn("w-full select-none text-sm font-mono", className)}
        style={style}
      >
        <div className="flex flex-col gap-0.5">{children}</div>
      </AccordionPrimitive.Root>
    </FilesContext.Provider>
  );
}

export interface FolderItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  value: string;
}

const FolderContext = React.createContext<{ isOpen: boolean; value: string }>({
  isOpen: false,
  value: "",
});

export const FolderItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  FolderItemProps
>(({ className, value, children, ...props }, ref) => {
  const { openValues } = React.useContext(FilesContext);
  const isOpen = openValues.includes(value);

  return (
    <FolderContext.Provider value={{ isOpen, value }}>
      <AccordionPrimitive.Item
        ref={ref}
        value={value}
        className={cn("group/folder border-none", className)}
        {...props}
      >
        {children}
      </AccordionPrimitive.Item>
    </FolderContext.Provider>
  );
});
FolderItem.displayName = "FolderItem";

export interface FolderTriggerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  gitStatus?: GitStatus;
}

export const FolderTrigger = React.forwardRef<
  HTMLButtonElement,
  FolderTriggerProps
>(({ className, children, gitStatus, ...props }, ref) => {
  const { isOpen } = React.useContext(FolderContext);

  return (
    <AccordionPrimitive.Header className="flex m-0 p-0">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between gap-2 px-2 py-1.5 rounded-md text-left text-sm font-medium transition-colors cursor-pointer",
          "hover:bg-accent/40 active:bg-accent/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          gitStatus === "untracked" && "text-emerald-500 dark:text-emerald-400",
          gitStatus === "modified" && "text-amber-500 dark:text-amber-400",
          gitStatus === "deleted" && "text-rose-500 dark:text-rose-400",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2 min-w-0">
          <ChevronRight
            className={cn(
              "h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-90"
            )}
          />
          <span className="shrink-0 text-muted-foreground group-hover/folder:text-foreground transition-colors">
            {isOpen ? (
              <FolderOpenIcon className="h-4 w-4 text-accent" />
            ) : (
              <FolderIcon className="h-4 w-4 text-muted-foreground" />
            )}
          </span>
          <span className="truncate font-medium text-foreground/90">{children}</span>
        </div>

        {gitStatus && (
          <div className="flex items-center shrink-0">
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                gitStatus === "untracked" && "bg-emerald-500",
                gitStatus === "modified" && "bg-amber-500",
                gitStatus === "deleted" && "bg-rose-500"
              )}
              title={`Git status: ${gitStatus}`}
            />
          </div>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
FolderTrigger.displayName = "FolderTrigger";

export interface FolderContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

export const FolderContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  FolderContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="relative ml-3.5 pl-3.5 border-l border-border/60 py-0.5 flex flex-col gap-0.5">
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});
FolderContent.displayName = "FolderContent";

export interface SubFilesProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SubFiles({ className, children, ...props }: SubFilesProps) {
  return (
    <div className={cn("flex flex-col gap-0.5 w-full", className)} {...props}>
      {children}
    </div>
  );
}

export interface FileItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ElementType;
  gitStatus?: GitStatus;
}

export const FileItem = React.forwardRef<HTMLDivElement, FileItemProps>(
  ({ icon: Icon = FileIcon, gitStatus, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between gap-2 px-2 py-1.5 rounded-md text-sm cursor-pointer select-none transition-colors",
          "hover:bg-accent/30 text-muted-foreground hover:text-foreground",
          gitStatus === "untracked" && "text-emerald-500/90 dark:text-emerald-400",
          gitStatus === "modified" && "text-amber-500/90 dark:text-amber-400",
          gitStatus === "deleted" && "text-rose-500/90 dark:text-rose-400 line-through opacity-75",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2 min-w-0">
          <Icon className="h-4 w-4 shrink-0 opacity-70 group-hover:opacity-100" />
          <span className="truncate">{children}</span>
        </div>

        {gitStatus && (
          <span
            className={cn(
              "text-[10px] font-mono font-semibold px-1 py-0.2 rounded shrink-0",
              gitStatus === "untracked" && "text-emerald-500 bg-emerald-500/10",
              gitStatus === "modified" && "text-amber-500 bg-amber-500/10",
              gitStatus === "deleted" && "text-rose-500 bg-rose-500/10"
            )}
            title={`Git status: ${gitStatus}`}
          >
            {gitStatus === "untracked" && "U"}
            {gitStatus === "modified" && "M"}
            {gitStatus === "deleted" && "D"}
          </span>
        )}
      </div>
    );
  }
);
FileItem.displayName = "FileItem";
