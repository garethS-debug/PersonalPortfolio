import React from 'react';
import {
  File,
  FileHighlight,
  FileIcon,
  FileLabel,
  Files,
  FilesHighlight,
  Folder,
  FolderContent,
  FolderHeader,
  FolderHighlight,
  FolderIcon,
  FolderItem,
  FolderTrigger,
} from '@/components/animate-ui/primitives/radix/files';
import {
  FolderOpenIcon,
  FolderIcon as LucideFolderIcon,
  FileIcon as LucideFileIcon,
} from 'lucide-react';
import filesData from './filesData';

export const FilesDemo = () => {
  return (
    <div className="dark relative size-full border bg-background overflow-auto text-foreground">
      <Files className="p-3" defaultOpen={[`folder-0`]}>
        <FilesHighlight className="bg-accent pointer-events-none">
          {filesData.map((folder, i) => (
            <FolderItem value={`folder-${i}`} key={`folder-${i}`}>
              <FolderHeader>
                <FolderTrigger className="w-full text-start">
                  <FolderHighlight>
                    <Folder className="flex items-center gap-2 p-2 pointer-events-none">
                      <FolderIcon
                        closeIcon={<LucideFolderIcon className="size-4.5 text-foreground" />}
                        openIcon={<FolderOpenIcon className="size-4.5 text-foreground" />}
                      />
                      <FileLabel className="text-sm">{folder.name}</FileLabel>
                    </Folder>
                  </FolderHighlight>
                </FolderTrigger>
              </FolderHeader>

              <div className="relative ml-8 before:absolute before:-left-3 before:inset-y-0 before:w-px before:h-full before:bg-border">
                <FolderContent>
                  {folder.techs &&
                    folder.techs.map((tech, j) => (
                      <FileHighlight key={`file-${i}-${j}`}>
                        <File className="flex items-center gap-2 p-2 pointer-events-none">
                          <FileIcon>
                            <LucideFileIcon className="size-4.5 text-foreground" />
                          </FileIcon>
                          <FileLabel className="text-sm">{tech}</FileLabel>
                        </File>
                      </FileHighlight>
                    ))}
                </FolderContent>
              </div>
            </FolderItem>
          ))}
        </FilesHighlight>
      </Files>
    </div>
  );
};

export default FilesDemo;
