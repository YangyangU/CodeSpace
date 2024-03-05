## 字节难度的sql知识

写一条sql语句，创建一个标avatar 用户头像


CREATE TABLE `avatar`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `minitype` VARCHAR(255) NOT NULL,
    `filename` VARCHAR(255) NOT NULL,
    `size` INT(11) NOT NULL,
    `userId` INT(11) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `userId` (`userId`),
    CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `parentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  KEY `userId` (`userId`),
  KEY `parentId` (`parentId`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`parentId`) REFERENCES `comment` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `originalname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mimetype` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `postId` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `width` smallint(6) NOT NULL,
  `height` smallint(6) NOT NULL,
  `metadata` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  KEY `userId` (`userId`),
  CONSTRAINT `file_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  CONSTRAINT `file_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `user_like_post` (
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`userId`,`postId`),
  KEY `postId` (`postId`),
  CONSTRAINT `user_like_post_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `user_like_post_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



INSERT INTO `user` (`id`, `name`, `password`) VALUES
('1', '王皓', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('2', '小雪', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('3', '李白', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('4', '杜甫', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('5', '白居易', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('6', '张三', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq');


- 部署
    - 本地部署
        测试数据和服务端代码 blog.sql
    - 远程部署
        阿里云服务器 blog.sql
    - 分布式部署
        blog.sql mysql 运行一下