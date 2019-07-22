-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: market
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `description` text,
  `image` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Ноутбуки','Так же, как и гаджеты ноутбуки стали частью жазни человека. Переносной персональный компьютер, в корпусе которого объединены типичные компоненты ПК, включая дисплей, клавиатуру и устройство указания (обычно сенсорная панель или тачпад), а также аккумуляторные батареи. Ноутбуки отличаются небольшими размерами и весом, время автономной работы ноутбуков варьируется в пределах от 2 до 15 часов.','114290.120x150.jpg'),(2,'Телефоны','Разнообразные смартфоны прочно вошли в повседневную жизнь человека. Карманный персональный компьютер, дополненный функциональностью мобильного телефона.','75093.120x150.jpg');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goods`
--

DROP TABLE IF EXISTS `goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `cost` double DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `category` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goods`
--

LOCK TABLES `goods` WRITE;
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES (1,'Lenovo IdeaPad 330-15ICH 81FK0011RU','15.6\" 1920 x 1080 TN+Film, Intel Core i7 8750H 2200 МГц, 8 ГБ, HDD 1000 ГБ, граф. адаптер: NVIDIA GeForce GTX 1050 4 ГБ, без ОС, цвет крышки черный',7999,'lenovo.jpg',1),(2,'Xiaomi RedmiBook 14 JYU4130CN','14.0\" 1920 x 1080 IPS, Intel Core i5 8265U 1600 МГц, 8 ГБ, SSD 256 ГБ, граф. адаптер: NVIDIA GeForce MX250 2 ГБ, Windows 10, цвет крышки серебристый',5888,'xiomybook.jpg',1),(3,'Apple MacBook Air 13\" 2018 MRE82','13.3\" 2560 x 1600 IPS, Intel Core i5 8210Y 1600 МГц, 8 ГБ, SSD 128 ГБ, граф. адаптер: встроенный, Mac OS, цвет крышки серый',1235,'applebook.jpg',1),(4,'Xiaomi Mi Notebook Pro 15.6 JYU4036CN','15.6\" 1920 x 1080 IPS, Intel Core i5 8250U 1600 МГц, 8 ГБ, SSD 256 ГБ, граф. адаптер: NVIDIA GeForce MX150 2 ГБ, Windows 10, цвет крышки темно-серый',2345,'xiomymibook.jpg',1),(5,'Apple MacBook Pro 15\" 2019 MV912','15.4\" 2880 x 1800 IPS, Intel Core i9 9880H 2300 МГц, 16 ГБ, SSD 512 ГБ, граф. адаптер: AMD Radeon Pro 560X 4 ГБ, Mac OS, цвет крышки серый',1234,'applemac15.jpg',1),(6,'ASUS VivoBook 15 X542UQ-DM285T','15.6\" 1920 x 1080 TN+Film, Intel Core i5 7200U 2500 МГц, 8 ГБ, HDD+SSD 500+128 ГБ, граф. адаптер: NVIDIA GeForce 940MX 2 ГБ, Windows 10, цвет крышки серый',45667,'asusvivo.jpg',1),(7,'Honor 10i HRY-LX1T (красный)','Android, экран 6.21\" IPS (1080x2340), HiSilicon Kirin 710, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 24 Мп, аккумулятор 3400 мАч, 2 SIM, цвет красный',1111,'honor.jpg',2),(8,'Samsung Galaxy A50 4GB/64GB (белый)','Android, экран 6.4\" AMOLED (1080x2340), Exynos 9610, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 25 Мп, аккумулятор 4000 мАч, 2 SIM, цвет белый',2478,'samsung.jpg',2),(9,'Xiaomi Mi 9T 6GB/64GB международная версия (красный)','Android, экран 6.39\" AMOLED (1080x2340), Qualcomm Snapdragon 730, ОЗУ 6 ГБ, флэш-память 64 ГБ, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM, цвет красный',4456,'xiomy.jpg',2),(10,'Xiaomi Redmi Note 7 M1901F7G 4GB/64GB международная версия (синий)','Android, экран 6.3\" IPS (1080x2340), Qualcomm Snapdragon 660 MSM8956 Plus, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM, цвет синий',1233324,'xiomy2.jpg',2),(11,'Huawei P30 Lite MAR-LX1M Dual SIM 4GB/128GB (насыщенный бирюзовый)','Android, экран 6.15\" IPS (1080x2312), HiSilicon Kirin 710, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 24 Мп, аккумулятор 3340 мАч, 2 SIM, цвет синий',23435,'huawei30.jpg',2),(12,'Apple iPhone XR 64GB (черный)','Apple iOS, экран 6.1\" IPS (828x1792), Apple A12 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 2942 мАч, 1 SIM, цвет черный',1710,'apple.jpg',2),(13,'Xiaomi Redmi 6 3GB/32GB международная версия (черный)','Android, экран 5.45\" IPS (720x1440), Mediatek MT6762 Helio P22, ОЗУ 3 ГБ, флэш-память 32 ГБ, карты памяти, камера 12 Мп, аккумулятор 3000 мАч, 2 SIM, цвет черный',1233,'xiomy3.jpg',2),(14,'Apple iPhone X 64GB (серебристый)','Apple iOS, экран 5.8\" AMOLED (1125x2436), Apple A11 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 2716 мАч, 1 SIM, цвет серебристый',23322,'applex.jpg',2),(15,'MEIZU Pro 6 Plus 64GB M686H международная версия (золотистый)','Android, экран 5.7\" AMOLED (1440x2560), Exynos 8890 (2 ГГц), ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3400 мАч, 2 SIM, цвет золотистый',12379,'meizy.jpg',2);
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-22 16:32:28
