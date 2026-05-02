// src/data/tournamentInfo.js
import may2026Image from "../assets/may-2026.png";
import june2026Image from "../assets/june-2026.jpeg";

export const tournamentsData = [
  {
    id: "may-2026",
    status: "future",
    title: "May 2026 Golf Tournament",
    date: "May 9, 2026",
    host: "APOGC Valley Boys and Girls",
    venue: "Los Robles Golf Course",
    location: "Thousand Oaks, CA",
    format: "Handicap Stroke Play",
    time: "10:30 AM",
    fee: "$125.00",
    image: may2026Image,
    photosLink: "",
    courseInfo: {
      address: "299 S Moorpark Rd\nThousand Oaks, CA 91361",
      par: "70",
      whiteTees: "M 68.2/120 | W 73.5/128",
      redTees: "M 65.0/112 | W 69.1/118",
    },
    closestToPinHoles: [],
    accommodations: {
      name: "Courtyard by Marriott",
      address: "1710 Newbury Rd\nThousand Oaks, CA",
    },
    schedule: [
      "Early Dinner",
      "Awarding",
      "Presentation of Donation to CLU Filipino Club",
      "Club Meeting",
      "Fellowship",
    ],
    winners: null,
    players: [
      {
        flight: 1,
        time: "10:30",
        names: [
          "Jay Baltazar",
          "Jayden Baltazar",
          "Manny Figuerres",
          "Doc Rolly Franco",
        ],
      },
      {
        flight: 2,
        time: "10:40",
        names: ["Bobet Lara", "Audie Grey", "Nards Castillo", "Mike Melendez"],
      },
      {
        flight: 3,
        time: "10:50",
        names: [
          "Doc Eric Serrano",
          "Roland Paras",
          "Angel Pangilinan",
          "Boy Medina",
        ],
      },
      {
        flight: 4,
        time: "11:00",
        names: [
          "Jimmy Magsino",
          "Ruel Umandal",
          "Roehl Reyes",
          "Lope Cristobal",
        ],
      },
      {
        flight: 5,
        time: "11:10",
        names: [
          "Raul Medina",
          "Vinz Argonza",
          "Pastor Dennis Casaje",
          "Caloy Ebalo",
        ],
      },
      {
        flight: 6,
        time: "11:20",
        names: ["Rocky Marte", "Francis Franco", "Bobet Peneza", "PJ Aclan"],
      },
      {
        flight: 7,
        time: "11:30",
        names: [
          "Beeboy Mansilla",
          "Sancho Sy",
          "Raul Sambitan",
          "Stephen Castro",
        ],
      },
    ],
  },

  {
    id: "june-2026",
    status: "future",
    title: "2nd Annual Inter Club Golf Tournament",
    date: "June 13, 2026",
    host: "APO Golf Club USA",
    venue: "Dos Lagos Golf Course",
    location: "Corona, CA",
    format: "Shotgun Start",
    time: "8:00 AM",
    fee: "$150.00",
    image: june2026Image,
    photosLink: "",
    courseInfo: {
      address: "14507 Cabot Dr\nCorona, CA 92883",
      par: "70",
      whiteTees: "TBD",
      redTees: "TBD",
    },
    closestToPinHoles: [],
    accommodations: null,
    schedule: ["18 holes of golf", "Lunch & awards ceremony", "Raffle Prizes"],
    winners: null,
    players: [],
  },

  {
    id: "nov-2025",
    status: "past",
    title: "November 2025 Tournament",
    date: "November 8, 2025",
    host: "The Valley Boys",
    venue: "Sterling Hills Golf Club",
    location: "Camarillo, CA",
    format: "Handicap Stroke Play",
    time: "9:50 AM",
    fee: "$115/player",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1000",
    photosLink: "https://photos.google.com/your-album-link",
    courseInfo: {
      address: "901 Sterling Hills Drive\nCamarillo, CA 93010",
      par: "71",
      whiteTees: "M 67.5/117 | W 72.9/126",
      redTees: "M 63.1/106 | W 67.5/112",
    },
    closestToPinHoles: [
      { hole: "Hole 8 Par 3", white: "136 Yards", red: "131 Yards" },
      { hole: "Hole 15 Par 3", white: "146 Yards", red: "125 Yards" },
    ],
    accommodations: {
      name: "Courtyard by Marriott",
      address: "1710 Newbury Rd\nThousand Oaks, CA",
    },
    schedule: [
      "Annual Meeting",
      "Election",
      "Awards Ceremony",
      "Fellowship",
      "Raffle",
    ],
    winners: {
      overall: "Bobet Lara",
      classA: { champ: "PJ Aclan", runnerUp: "Nards Castillo" },
      classB: { champ: "Nemie Mosequera", runnerUp: "Boy Medina" },
      classC: { champ: "Eric Serrano", runnerUp: "Rocky Marte" },
      closestToPin: [
        { hole: "Hole #8", winner: "Raul Medina" },
        { hole: "Hole #15", winner: "Pris Tanglao" },
        {
          hole: "Hole #11 (Sponsored by Doc Rolly Franco)",
          winner: "Ed Mendoza",
        },
      ],
    },
    players: [
      {
        flight: 1,
        time: "9:50",
        names: [
          "Jay Baltazar",
          "Ed Mendoza",
          "Roland Paras",
          "Doc Rolly Franco",
        ],
      },
      {
        flight: 2,
        time: "10:00",
        names: [
          "Sancho Sy",
          "Lope Cristobal",
          "Nards Castillo",
          "Bobet Peneza",
        ],
      },
      {
        flight: 3,
        time: "10:10",
        names: [
          "Rocky Marte",
          "Manny Figuerres",
          "Pastor Dennis Casaje",
          "Nemie Mosequera",
        ],
      },
      {
        flight: 4,
        time: "10:20",
        names: ["Oca Atienza", "Jimmy Magsino", "PJ Aclan", "Sonny Martinez"],
      },
      {
        flight: 5,
        time: "10:30",
        names: [
          "Raul Medina",
          "Raul Sambitan",
          "Angel Pangilinan",
          "Mike Melendez",
        ],
      },
      {
        flight: 6,
        time: "10:40",
        names: [
          "Doc Eric Serrano",
          "Boy Medina",
          "Paco Franco",
          "Stephen Castro",
        ],
      },
      {
        flight: 7,
        time: "10:50",
        names: ["Pris Tanglao", "Kaye Sumicad", "Flor Mendoza"],
      },
      {
        flight: 8,
        time: "11:00",
        names: ["Bobet Lara", "Beeboy Mansilla"],
      },
    ],
  },
];
