CREATE TABLE [dbo].[Projects](
	[Id] [int] Identity(1,1) PRIMARY KEY NOT NULL,
	[ProjectName] [varchar](100) NOT NULL,
	[UserId] [int] not null,
	CONSTRAINT FK_Users_Projects FOREIGN KEY (UserId) REFERENCES [dbo].[Users](Id)
);