import type { DatasheetBlockId, SpecKey } from "./types";

/**
 * Kroatische Bezeichnungen aller technischen Kennwerte.
 * Komponenten rendern nie einen eigenen Feldnamen — sie schlagen hier nach.
 */
export const specLabels: Record<SpecKey, string> = {
  // Abmessungen / Masse
  operatingWeight: "Radna masa",
  bucketCapacity: "Zapremina lopate",
  shippingLength: "Transportna dužina",
  shippingWidth: "Transportna širina",
  heightOverCabin: "Visina preko kabine",
  width: "Širina",

  // Motor / Antrieb
  engineModel: "Model motora",
  emission: "Emisijska norma",
  displacement: "Radni obujam",
  power: "Snaga motora",
  ratedSpeed: "Nazivni broj okretaja",
  batteryCapacity: "Kapacitet baterije",
  batteryType: "Tip baterije",
  chargingTime: "Vrijeme punjenja",
  runtime: "Autonomija rada",

  // Hydraulik
  hydraulicType: "Tip hidraulike",
  pumpFlow: "Protok pumpe",
  hydraulicPressure: "Radni tlak",
  auxFlow: "Protok dodatne hidraulike",

  // Arbeitsbereich / Leistung
  diggingDepth: "Maks. dubina kopanja",
  diggingReach: "Maks. doseg kopanja",
  bucketForce: "Sila kopanja lopate",
  armForce: "Sila kopanja ruke",
  dumpHeight: "Visina istovara",
  tippingLoad: "Prevrtna nosivost",
  liftCapacity: "Nosivost",
  liftHeight: "Visina podizanja",
  workingHeight: "Radna visina",
  platformCapacity: "Nosivost košare",
  travelSpeed: "Brzina kretanja",
  gradeability: "Savladavanje uspona",
};

/** Überschriften der vier Datenblatt-Blöcke aus ANALYSIS.md §4 Punkt 9. */
export const datasheetLabels: Record<DatasheetBlockId, string> = {
  dimensions: "Dimenzije i mase",
  engine: "Motor",
  powertrain: "Pogon",
  hydraulics: "Hidraulički sustav",
  workingRange: "Radni doseg",
  performance: "Radne karakteristike",
};
