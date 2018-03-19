-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: table_2
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bids`
--

DROP TABLE IF EXISTS `bids`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bids` (
  `biddingparty` varchar(56) NOT NULL,
  `projectname` varchar(56) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `days` int(11) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `bidpic` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`biddingparty`,`projectname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bids`
--

LOCK TABLES `bids` WRITE;
/*!40000 ALTER TABLE `bids` DISABLE KEYS */;
INSERT INTO `bids` VALUES ('abc@xyz.com','Bart',4500,15,'Alpha','http://fc03.deviantart.net/fs70/f/2013/009/f/f/render_kirito_by_lucaskirito-d5qxm1c.png'),('abc@xyz.com','Cloud2',350,2,'Alpha','http://fc03.deviantart.net/fs70/f/2013/009/f/f/render_kirito_by_lucaskirito-d5qxm1c.png'),('abc@xyz.com','Website',3000,12,'Alpha','http://fc03.deviantart.net/fs70/f/2013/009/f/f/render_kirito_by_lucaskirito-d5qxm1c.png'),('abc@xyz.com','Website2',300,7,'Alpha','http://fc03.deviantart.net/fs70/f/2013/009/f/f/render_kirito_by_lucaskirito-d5qxm1c.png'),('hr@hr.com','Bart',4000,5,'Joey','https://img00.deviantart.net/b68f/i/2013/294/c/8/kirito___sword_art_online_by_galaxiestudios-d6qor9p.png'),('hr@hr.com','Cloud2',300,3,'Joey','https://img00.deviantart.net/b68f/i/2013/294/c/8/kirito___sword_art_online_by_galaxiestudios-d6qor9p.png'),('mr@mr.com','Bart',2500,25,'Miracle','https://avatarfiles.alphacoders.com/856/85612.png'),('mr@mr.com','Cloud2',400,4,'Miracle','https://avatarfiles.alphacoders.com/856/85612.png'),('mr@mr.com','Machine Learing',1800,20,'Miracle','https://avatarfiles.alphacoders.com/856/85612.png'),('mr@mr.com','Website',2000,5,'Miracle','https://avatarfiles.alphacoders.com/856/85612.png'),('root@root.com','Ai Testing',1200,12,'Root','https://avatarfiles.alphacoders.com/873/87370.jpg'),('root@root.com','Bart',3000,45,'Root','https://avatarfiles.alphacoders.com/873/87370.jpg'),('root@root.com','Machine Learing',1500,3,'Root','https://avatarfiles.alphacoders.com/873/87370.jpg'),('rt@rt.com','Ai Testing',1400,7,'Rachel','https://avatarfiles.alphacoders.com/466/46621.jpg'),('rt@rt.com','Cloud',1700,10,'Rachel','https://avatarfiles.alphacoders.com/466/46621.jpg'),('rt@rt.com','Cloud2',300,7,'Rachel','https://avatarfiles.alphacoders.com/466/46621.jpg'),('rt@rt.com','Website',2500,30,'Rachel','https://avatarfiles.alphacoders.com/466/46621.jpg'),('rt@rt.com','Website2',300,7,'Rachel','https://avatarfiles.alphacoders.com/466/46621.jpg');
/*!40000 ALTER TABLE `bids` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `projectname` varchar(255) NOT NULL,
  `email` varchar(45) NOT NULL,
  `projectdesc` varchar(1000) DEFAULT NULL,
  `projectskills` varchar(1000) DEFAULT NULL,
  `projectmin` int(11) DEFAULT NULL,
  `projectmax` int(11) DEFAULT NULL,
  `projectopen` varchar(45) NOT NULL DEFAULT 'yes',
  `projectbids` int(11) DEFAULT '0',
  `projectavg` int(11) DEFAULT '0',
  `name` varchar(45) DEFAULT NULL,
  `winnername` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`projectname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES ('Ai Testing','mr@mr.com','Test automation','White box',1000,1500,'no',2,1300,'Miracle','Rachel'),('Alphabet','root@root.com','Need Software Developers','Agile, Web development.',2000,5000,'yes',0,0,'Root',NULL),('Bart','rt@rt.com','Civil','Autocad',2000,5000,'yes',4,3500,'Rachel',NULL),('Cloud','root@root.com','Aws','Aws',1500,2000,'no',1,1700,'Root','Rachel'),('Cloud2','root@root.com','AWS','AWS',200,500,'yes',4,338,'Root',NULL),('Machine Learing','abc@xyz.com','Detect Duplicates','Python',1000,2000,'yes',2,1650,'Alpha',NULL),('Website','root@root.com','Build me a Website','React, Node, Mysql',1000,5000,'no',3,2500,'Root','Miracle'),('Website2','root@root.com','abc','def',200,500,'yes',0,0,'Root',NULL);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `email` varchar(45) NOT NULL,
  `password` varchar(10000) NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('abc@qwe.com','12345','qweqe'),('abc@xyz.com','$2a$09$TR3l1iXReVvniuW82IXyN.8TZFvJhq7DmAtHScShnTTUHHxpp3U.K','Alpha'),('emaily','emaily','emaily'),('h2@h2.com','12345','12345'),('h@a.com','123','asdf'),('h@y.com','qwerty','hyhy'),('haha123','haha123','haha123'),('har@har.com','har','har'),('harsh','harsh','harsh'),('harsh@abc.com','qwerty','harsh'),('harsh@harsh.com','12345','harsh patel'),('harsh@xyz.com','12345','hhh'),('harshrp2511@gmail.com','harsh','harshrp2511'),('hbc@hbc.com','jkadjfkbad','jahfjahf'),('hjhjh','jjhjhk','hjhjbj'),('hnb','hnb','hnb'),('hr','hr','hr'),('hr@hr.com','$2a$09$dIVpnqwCpjHSrE.ePArtTOMg3dxiaaxBIiKBO8uTUtEFmDft3Ur7G','Joey'),('hrp@hrp.com','12345445453545345','hrp'),('hu','hu','hu'),('huuu','jgjggjjg','jhjhh'),('huy','huy','huy'),('hy','hy','hy'),('hyiuj','hjhjj','jhjh'),('jaymaniyar84@gmail.com','12345','jaymaniyar'),('jaymaniyar9','jaymaniyar9','jaymaniyar9'),('mr@mr.com','$2a$09$NfxF1XZz3XyAenRMOfjv9u.eyncoMAzLqPh61oGRwEtt6bIcXSxpW','Miracle'),('patel@patel.com','$2a$09$JdOqxSCPiHLNdQFuYf3rQOs7zwEr/KRArLha/UzOaToxA7dMk5FTK','patel'),('qw@qww.com','21321','qds'),('qwe@nm.com','$2a$09$x2owayBX04f10L0efSXJVuQmT/LgXDGs4aItJrYgtaPyAxN.y3Et6','bc123'),('root1@root1.com','$2a$09$eGERGnIunECnqDOh1FEv8.GFirbZ8tknnsSEQ5wG99jmTi15ZvVF.','root1'),('root2@root2.com','$2a$09$gMf6RFi7KeS1BdZxd7gjUuJoYEb4Ro3MKiRB869LxP9FIlJ5vonqm','root1'),('root3@root3.com','$2a$09$iUtKkgEylDnGLkI2ByUXF.0bpCHhTHgA6Fpwn38JVQr0A033M7tMa','root1'),('root4@root4.com','$2a$09$lTSKGE8WCh09aDPYkAy13.Eqe94RW/dey/3Ic5ehMl9SLeTUexemO','root1'),('root@root.com','$2a$09$cf8vCoBAGkWxVpgWC2b94eZqjfKM9X1SeL3ehcmA8BlR4yg7wlovC','Root'),('rt@rt.com','$2a$09$JKIsABD7Xg0/5UxW9Uo5kugxxDaxeDSPzHnZ2LzaW9JLHQkrU5IAO','Rachel'),('test@root.cpm','testroot','testroot'),('test@test.com','test','test'),('tr@tr.com','tr','tr'),('tyty@ty.com','12345','ty'),('yy@yy.com','yy','yy'),('zrp@zrp.com','$2a$09$JRxVKtgIERJZ0kkaw1hXUee5PuFAgDrutw9/SAXLqEwgNaVIrAhpS','zrp');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_profile`
--

DROP TABLE IF EXISTS `users_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_profile` (
  `email` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL DEFAULT 'N/A',
  `phone` varchar(45) NOT NULL DEFAULT 'N/A',
  `aboutme` varchar(1000) NOT NULL DEFAULT 'N/A',
  `skills` varchar(1000) NOT NULL DEFAULT 'N/A',
  `profilepic` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_profile`
--

LOCK TABLES `users_profile` WRITE;
/*!40000 ALTER TABLE `users_profile` DISABLE KEYS */;
INSERT INTO `users_profile` VALUES ('abc@xyz.com','Alpha','4343435656','I Know Stuff','Docker','http://fc03.deviantart.net/fs70/f/2013/009/f/f/render_kirito_by_lucaskirito-d5qxm1c.png'),('bc@bc.com','N/A','N/A','N/A','N/A',NULL),('hjhjh','N/A','N/A','N/A','N/A',NULL),('hnb','N/A','N/A','N/A','N/A',NULL),('hr','N/A','N/A','N/A','N/A',NULL),('hr@hr.com','Joey','1212121212','I am Software Engineer','Node','https://img00.deviantart.net/b68f/i/2013/294/c/8/kirito___sword_art_online_by_galaxiestudios-d6qor9p.png'),('hrp@hrp.com','N/A','N/A','N/A','N/A',NULL),('hu','N/A','N/A','N/A','N/A',NULL),('huuu','N/A','N/A','N/A','N/A',NULL),('huy','N/A','N/A','N/A','N/A',NULL),('hy','N/A','N/A','N/A','N/A',NULL),('hyiuj','N/A','N/A','N/A','N/A',NULL),('jaymaniyar9','Please Enter your name here..','Please enter your phone here..','Please tell something about yourself..','Please enter your skills..',NULL),('mr@mr.com','Miracle','9898989898','I know AWS','Aws','https://avatarfiles.alphacoders.com/856/85612.png'),('patel@patel.com','N/A','N/A','N/A','N/A',NULL),('qwe@nm.com','N/A','N/A','N/A','N/A',NULL),('root@root.com','Root','9876544567','I am a C and C++ developer','C,C++','https://avatarfiles.alphacoders.com/873/87370.jpg'),('rt@rt.com','Rachel','4085120246','AI','Cloud ','https://avatarfiles.alphacoders.com/466/46621.jpg'),('test@root.cpm','Harsh Patel aka Chaudhari','N/A','N/A','N/A',NULL),('tr@tr.com','N/A','N/A','N/A','N/A',NULL),('zrp@zrp.com','N/A','N/A','N/A','N/A',NULL);
/*!40000 ALTER TABLE `users_profile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-18 23:03:15
