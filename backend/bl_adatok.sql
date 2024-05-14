-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 23. 11:28
-- Kiszolgáló verziója: 10.4.24-MariaDB
-- PHP verzió: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `foci-webprog`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bl_adatok`
--

CREATE TABLE `bl_adatok` (
  `id` int(11) NOT NULL,
  `klubnev` varchar(1000) NOT NULL,
  `gyozelmek_szama` int(11) NOT NULL,
  `legutobb_gyozott` date NOT NULL,
  `mvp` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `bl_adatok`
--

INSERT INTO `bl_adatok` (`id`, `klubnev`, `gyozelmek_szama`, `legutobb_gyozott`, `mvp`) VALUES
(1, 'Real Madrid', 14, '2021-05-28', 'Karim Benzema'),
(2, 'Manchester City', 1, '2023-06-10', 'Rodri'),
(3, 'Chelsea', 2, '2020-05-29', 'N\'Goló Kanté'),
(4, 'Bayern Munich', 6, '2020-08-23', 'Robert Lewandowski'),
(5, 'Liverpool', 6, '2020-06-01', 'Virgil Van Dijk');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `bl_adatok`
--
ALTER TABLE `bl_adatok`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `bl_adatok`
--
ALTER TABLE `bl_adatok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
