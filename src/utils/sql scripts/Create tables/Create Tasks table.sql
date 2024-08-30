CREATE TABLE [dbo].[Tasks](
	[Id] [int] Identity(1,1) PRIMARY KEY NOT NULL,
	[Title] [varchar](100) NOT NULL,
	[Description] [varchar](100) NOT NULL,
	[DueDate] [date] NOT NULL,
	[ProjectId] [int] NOT NULL,
	[UserId] [int] not null,
	[StatusId] [int] not null,
	[PriorityId] [int] not null,
	CONSTRAINT FK_Users_Tasks FOREIGN KEY (UserId) REFERENCES [dbo].[Users](Id),
	CONSTRAINT FK_Project_Tasks FOREIGN KEY (UserId) REFERENCES [dbo].[Projects](Id),
	CONSTRAINT FK_Status_Tasks FOREIGN KEY (UserId) REFERENCES [dbo].[Status](Id),
	CONSTRAINT FK_Priority_Tasks FOREIGN KEY (UserId) REFERENCES [dbo].[Priority](Id),
);