// Hours are in military time.
export type hours = [number, number];

// Prices start with the amount of hours and then the price.
type price = { hours: hours; prices: [number, number][] };
export type prices = price[];

export type day = {
    day: string;
    hours: hours;
    prices: prices;
    glowBowling?: price;
};
