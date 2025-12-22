import React from "react";

// 1. Import Ikon sesuai file di folder assets/icons [cite: 623, 635, 769, 803-810, 854-869]
import OverviewSVG from "../../assets/icons/Overview.svg?react";
import TransactionSVG from "../../assets/icons/Transaction.svg?react";
import BalanceSVG from "../../assets/icons/wallet.svg?react";
import BillSVG from "../../assets/icons/Bill.svg?react";
import ExpenseSVG from "../../assets/icons/Expencces.svg?react";
import GoalSVG from "../../assets/icons/Goal.svg?react";
import SettingSVG from "../../assets/icons/Settings.svg?react";
import DetailSVG from "../../assets/icons/Icon.svg?react";
import ChevronRightSVG from "../../assets/icons/chevrons-right.svg?react";
import LogoutSVG from "../../assets/icons/Icon2.svg?react";
import AdobeSVG from "../../assets/icons/Adobe.svg?react";
import FigmaSVG from "../../assets/icons/Figma.svg?react";
import FoodSVG from "../../assets/icons/Food.svg?react";
import GamepadSVG from "../../assets/icons/gamepad-2.svg?react";
import HouseSVG from "../../assets/icons/Housing.svg?react";
import MovieSVG from "../../assets/icons/Movie.svg?react";
import OtherSVG from "../../assets/icons/Others.svg?react";
import ShoppingSVG from "../../assets/icons/Shopping.svg?react";
import TransportSVG from "../../assets/icons/Trasnport.svg?react";
import ArrowRightSVG from "../../assets/icons/arrow-right.svg?react";
import ArrowDownSVG from "../../assets/icons/Downarrow.svg?react";
import ArrowUpSVG from "../../assets/icons/Uparrow.svg?react";

// 2. Helper function untuk membuat komponen ikon [cite: 625, 636, 672-674, 815]
const createIcon = (SVG) => ({ size = 24, color = "currentColor", ...props }) => (
  <SVG width={size} height={size} stroke={color} {...props} />
);

// 3. Objek Icon untuk diekspor [cite: 624, 641, 811, 846, 887]
const Icon = {
  Overview: createIcon(OverviewSVG),
  Transaction: createIcon(TransactionSVG),
  Balance: createIcon(BalanceSVG),
  Bill: createIcon(BillSVG),
  Expense: createIcon(ExpenseSVG),
  Goal: createIcon(GoalSVG),
  Setting: createIcon(SettingSVG),
  Detail: createIcon(DetailSVG),
  ChevronRight: createIcon(ChevronRightSVG),
  Logout: createIcon(LogoutSVG),
  Adobe: createIcon(AdobeSVG),
  Figma: createIcon(FigmaSVG),
  Food: createIcon(FoodSVG),
  Gamepad: createIcon(GamepadSVG),
  House: createIcon(HouseSVG),
  Movie: createIcon(MovieSVG),
  Other: createIcon(OtherSVG),
  Shopping: createIcon(ShoppingSVG),
  Transport: createIcon(TransportSVG),
  ArrowRight: createIcon(ArrowRightSVG),
  ArrowDown: createIcon(ArrowDownSVG),
  ArrowUp: createIcon(ArrowUpSVG),

  // Fallback agar CardBalance dan CardGoal tidak error jika mencari key ini [cite: 209, 212]
  Mastercard: createIcon(BalanceSVG),
  Visa: createIcon(BalanceSVG),
  Edit: createIcon(DetailSVG),
  Award: createIcon(GoalSVG),
};

export default Icon;