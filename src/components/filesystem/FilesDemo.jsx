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

export const FilesDemo = () => {
  return (
    <div className="dark relative size-full border bg-background overflow-auto text-foreground">
      <Files className="p-3" defaultOpen={["folder-1"]}>
        <FilesHighlight className="bg-accent pointer-events-none">
          <FolderItem value="folder-1">
            <FolderHeader>
              <FolderTrigger className="w-full text-start">
                <FolderHighlight>
                  <Folder className="flex items-center gap-2 p-2 pointer-events-none">
                    <FolderIcon
                      closeIcon={<LucideFolderIcon className="size-4.5 text-foreground" />}
                      openIcon={<FolderOpenIcon className="size-4.5 text-foreground" />}
                    />
                    <FileLabel className="text-sm">Folder 1</FileLabel>
                  </Folder>
                </FolderHighlight>
              </FolderTrigger>
            </FolderHeader>

            <div className="relative ml-8 before:absolute before:-left-3 before:inset-y-0 before:w-px before:h-full before:bg-border">
              <FolderContent>
                <FileHighlight>
                  <File className="flex items-center gap-2 p-2 pointer-events-none">
                    <FileIcon>
                      <LucideFileIcon className="size-4.5 text-foreground" />
                    </FileIcon>
                    <FileLabel className="text-sm">File 1</FileLabel>
                  </File>
                </FileHighlight>

                <Files defaultOpen={["folder-2"]}>
                  <FolderItem value="folder-2">
                    <FolderHeader>
                      <FolderTrigger className="w-full text-start">
                        <FolderHighlight>
                          <Folder className="flex items-center gap-2 p-2 pointer-events-none">
                            <FolderIcon
                              closeIcon={<LucideFolderIcon className="size-4.5 text-foreground" />}
                              openIcon={<FolderOpenIcon className="size-4.5 text-foreground" />}
                            />
                            <FileLabel className="text-sm">Folder 2</FileLabel>
                          </Folder>
                        </FolderHighlight>
                      </FolderTrigger>
                    </FolderHeader>

                    <div className="relative ml-8 before:absolute before:-left-3 before:inset-y-0 before:w-px before:h-full before:bg-border">
                      <FolderContent>
                        <FileHighlight>
                          <File className="flex items-center gap-2 p-2 pointer-events-none">
                            <FileIcon>
                              <LucideFileIcon className="size-4.5 text-foreground" />
                            </FileIcon>
                            <FileLabel className="text-sm">File 2</FileLabel>
                          </File>
                        </FileHighlight>
                        <FileHighlight>
                          <File className="flex items-center gap-2 p-2 pointer-events-none">
                            <FileIcon>
                              <LucideFileIcon className="size-4.5 text-foreground" />
                            </FileIcon>
                            <FileLabel className="text-sm">File 3</FileLabel>
                          </File>
                        </FileHighlight>
                      </FolderContent>
                    </div>
                  </FolderItem>

                  <FileHighlight>
                    <File className="flex items-center gap-2 p-2 pointer-events-none">
                      <FileIcon>
                        <LucideFileIcon className="size-4.5 text-foreground" />
                      </FileIcon>
                      <FileLabel className="text-sm">File 4</FileLabel>
                    </File>
                  </FileHighlight>
                </Files>
              </FolderContent>
            </div>
          </FolderItem>

          <FileHighlight>
            <File className="flex items-center gap-2 p-2 pointer-events-none">
              <FileIcon>
                <LucideFileIcon className="size-4.5 text-foreground" />
              </FileIcon>
              <FileLabel className="text-sm">File 5</FileLabel>
            </File>
          </FileHighlight>
        </FilesHighlight>
      </Files>
    </div>
  );
};

export default FilesDemo;
