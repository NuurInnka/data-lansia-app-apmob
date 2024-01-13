-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 13, 2024 at 07:09 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_lansia`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_lansia`
--

CREATE TABLE `data_lansia` (
  `id_lansia` int NOT NULL,
  `nama` varchar(100) NOT NULL,
  `tempat_lahir` varchar(150) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `alamat` varchar(200) NOT NULL,
  `umur` int NOT NULL,
  `status_` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `data_lansia`
--

INSERT INTO `data_lansia` (`id_lansia`, `nama`, `tempat_lahir`, `tanggal_lahir`, `alamat`, `umur`, `status_`) VALUES
(1, 'Siti', 'Pabahanan', '1974-01-01', 'Jl. Atilam', 50, 'Janda'),
(29, 'mbah kung', 'sdfg', '2024-01-12', 'as', 90, 'asd'),
(31, 'fghj', 'ghjk', '0067-05-04', '5678', 678, '5678');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_lansia`
--
ALTER TABLE `data_lansia`
  ADD PRIMARY KEY (`id_lansia`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_lansia`
--
ALTER TABLE `data_lansia`
  MODIFY `id_lansia` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
