CREATE TABLE [dbo].[Comments](
	[Id] [int] Identity(1,1) PRIMARY KEY NOT NULL,
	[Content] [text] NOT NULL,
	[Timestamp] [datetime] not null,
	[UserId] [int] not null,
	[TaskId] [int] not null,
	CONSTRAINT FK_Users_Comments FOREIGN KEY (UserId) REFERENCES [dbo].[Users](Id),
	CONSTRAINT FK_Tasks_Comments FOREIGN KEY (UserId) REFERENCES [dbo].[Tasks](Id)
);
