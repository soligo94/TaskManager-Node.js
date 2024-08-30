CREATE TABLE [dbo].[Users](
	[Id] [int] Identity(1,1) PRIMARY KEY NOT NULL,
	[Username] [varchar](100) NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[Password] NVARCHAR(MAX) NOT NULL
);