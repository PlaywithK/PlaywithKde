"use client";

const updates = [
  {
    version: "1.2.0",
    changes: [
      { type: "neu", text: "Wahl-Mechanik - Wahlen sind nun möglich, die erste findet am 30.11.2024 statt" },
      { type: "neu", text: "Enderman können in der Bauwelt keine Blöcke mehr setzen" },
      { type: "neu", text: "Spieler können mit /fly für etwas Geld für 15 Minuten fliegen" },
      { type: "neu", text: "Der Adventskalender ist nun vorhanden und kann mit /adventskalender oder /advent ab dem 01.12. bis zum 29.12. geöffnet werden" },
      { type: "überarbeitet", text: 'Die "Du bist AFK"-Nachricht ist nun anklickbar, um den AFK-Modus zu verlassen' },
      { type: "fix", text: "Der Teleport in den Nether und das End in der Lobby funktioniert nun" },
      { type: "fix", text: 'Quest "Besuche den Nether" und "Besuche das End" sollten nun korrekt funktionieren' },
      { type: "fix", text: 'Quest "Sammle Diamanten" funktioniert jetzt auch mit Deepslate-Diamanten' },
    ]
  },
  {
    version: "1.1.5",
    changes: [
      { type: "neu", text: "Online-Minimap: http://www.map.playwithk.de/" },
      { type: "neu", text: "Mit /farmwelt tp und /farmwelt timer kann man sich nun von überall in die Farmwelt teleportieren und sich die Zeit bis zum Reset anzeigen lassen" },
      { type: "neu", text: "Online-Map und Webseite werden nun in der Join-Nachricht angezeigt" },
      { type: "fix", text: 'Quest "Upgrade Template einsammeln" klappt nun richtig' },
      { type: "fix", text: 'Quest "Schmelze XY im Ofen" geht nun in jedem Ofen' },
    ]
  },
  {
    version: "1.1.4",
    changes: [
      { type: "neu", text: "9x Verrottetes Fleisch kann nun zu 1x Leder vercraftet werden" },
      { type: "fix", text: "Daily-Quests sollten nun richtig funktionieren" },
      { type: "fix", text: "Teleports in den Nether und End in der Lobby funktionieren jetzt auch bei ungeladenen Welten" },
      { type: "fix", text: "Sitzen geht nun auch mit etwas in der Off-Hand" },
      { type: "fix", text: "Man kann sich nicht mehr auf Stufen und Treppen setzen, über denen ein Block ist" },
      { type: "fix", text: "Das interagieren mit anderen Spielern geht nun nur noch mit leerer Hand" },
      { type: "fix", text: "Items können jetzt am Spawn gedroppt werden" },
    ]
  },
  {
    version: "1.1.3",
    changes: [
      { type: "neu", text: "/vote berücksichtigt nun keine AFK-Spieler mehr" },
      { type: "neu", text: "Teleports zum Nether und End in der Lobby nun zugänglich" },
      { type: "neu", text: "Autofill für den /home Command (Tab Completion)" },
      { type: "fix", text: "/delhome sollte nun korrekt funktionieren" },
      { type: "neu", text: "Automatische Server-Restart-Ankündigung" },
    ]
  },
  {
    version: "1.1.2",
    changes: [
      { type: "fix", text: "Bug behoben, welcher Spieler nach Verlassen des AFKs direkt wieder AFK gesetzt hat" },
    ]
  },
  {
    version: "1.1.1",
    changes: [
      { type: "neu", text: "Clans können nun mit /clan create <NAME> <TAG> erstellt werden; es gibt einen Clanchat (/cc oder /clanchat) und ein Clankonto (/ck oder /clankonto)" },
      { type: "neu", text: "Spieler können mit /heads oder /hdb Köpfe kaufen" },
      { type: "neu", text: "Mit /vote badweather oder /vote schnee kann man jetzt auch für schlechtes Wetter voten" },
      { type: "neu", text: "Vault-Integration für das Economy-System" },
    ]
  },
  {
    version: "1.1.0",
    changes: [
      { type: "neu", text: "Timber und Veinminer wurden jetzt in Multimine zusammengefasst und können mit /multimine ein- und ausgeschaltet werden" },
      { type: "neu", text: "Eine Schneeschaufel wurde zu Multimine hinzugefügt. Ist Multimine aktiv, kann mit jeder Schaufel Schnee geschippt werden" },
      { type: "neu", text: "Votes werden übersprungen, wenn nur ein Spieler online ist" },
      { type: "neu", text: "Hologramme in der Lobby für die Teleports zur Bauwelt, Nether und End" },
      { type: "neu", text: "In der Bauwelt machen Creeper keinen Explosionsschaden mehr" },
      { type: "neu", text: "Spieler-Interaktionsmenü beim Rechtsklicken eines Spielers (kann noch Fehler enthalten)" },
      { type: "neu", text: "Wartungsmodus für Server-Wartungen und das Laden von Updates" },
      { type: "neu", text: "Neuer Befehl: /msg zum Senden von privaten Nachrichten an andere Spieler" },
      { type: "neu", text: "Neuer Befehl /dev für PlaywithK, als Anzeige für Spieler wenn PWK am Programmieren ist" },
      { type: "hotfix", text: "HoleFiller endgültig entfernt" },
      { type: "überarbeitet", text: "In der Lobby bekommen Spieler nun keinen Schaden mehr" },
      { type: "überarbeitet", text: "In der Lobby ist PvP deaktiviert" },
      { type: "überarbeitet", text: "Regeneration und Hunger-Regeneration ist in der Lobby deaktiviert" },
      { type: "überarbeitet", text: "Enderperlen können in der Lobby nicht mehr genutzt werden" },
      { type: "überarbeitet", text: "Mobs können den /spawn-Bereich nicht mehr betreten und Explosionen sind ausgeschaltet" },
      { type: "überarbeitet", text: "Im /spawn-Bereich erhalten Spieler keinen Schaden mehr" },
      { type: "fix", text: "Spieler können nicht mehr aus dem AFK geschoben werden und müssen nun /afk nutzen" },
      { type: "fix", text: "Mobs haben kein Interesse mehr an AFK-Spielern" },
      { type: "fix", text: "/live für mightycrumb geht nun" },
      { type: "fix", text: "Falsche Nachricht beim Setzen von Homes überarbeitet" },
    ]
  },
  {
    version: "1.0.9",
    changes: [
      { type: "fix", text: "Spieler setzen sich jetzt anders herum hin, damit der 'Snapping-Point' auf der anderen Seite ist" },
    ]
  },
  {
    version: "1.0.8",
    changes: [
      { type: "neu", text: "Neuer Befehl /afk zum AFK gehen. Im AFK-Modus erhalten Spieler keinen Schaden" },
      { type: "neu", text: "Der Status AFK und LIVE wird nun in der Tabliste angezeigt" },
      { type: "info", text: "Vorbereitungen für /tree getroffen" },
    ]
  },
  {
    version: "1.0.7",
    changes: [
      { type: "überarbeitet", text: "Votes enden nun schon, wenn die Mehrheit abgestimmt hat und die Gegenstimme nicht mehr gewinnen kann" },
      { type: "überarbeitet", text: "Timber und Veinminer haben nun ein neues Nachrichtendesign" },
      { type: "fix", text: "Der Farmwelt-Counter resettet sich nun nicht mehr bei Server-Restarts" },
      { type: "fix", text: "/live für Bloodyhorrorkid geht nun wieder richtig" },
    ]
  },
  {
    version: "1.0.6.1",
    changes: [
      { type: "hotfix", text: "/home confirm und /home deny funktionieren jetzt" },
    ]
  },
  {
    version: "1.0.6",
    changes: [
      { type: "neu", text: "Veinminer funktioniert jetzt auch an Nether-Erzen" },
      { type: "neu", text: "Neuer Befehl /sharhome zum Teilen von Homes mit anderen Spielern" },
      { type: "überarbeitet", text: "Die Groß- und Kleinschreibung bei der Benutzung von /home ist jetzt egal" },
      { type: "überarbeitet", text: "Das Überschreiben von Homes wird jetzt im Chat angekündigt und muss vorher bestätigt werden" },
    ]
  },
  {
    version: "1.0.5",
    changes: [
      { type: "neu", text: "/live für Bloodyhorrorkid, irwa_, Rudi_von_Sack und PlaywithK" },
      { type: "info", text: "Komplette Entfernung des Levels, da dieses nicht korrekt funktioniert hat" },
      { type: "hotfix", text: "Chat-Highlights und der damit zusammenhängende Befehl /highlight wurden entfernt" },
    ]
  },
  {
    version: "1.0.4.1",
    changes: [
      { type: "fix", text: "Deepslate-Diamanterz geht nun auch mit Veinminer" },
      { type: "hotfix", text: "Nullpointer in Configs gelöst" },
    ]
  },
  {
    version: "1.0.4",
    changes: [
      { type: "fix", text: "Veinminer geht nun auch bei Deepslate" },
    ]
  },
  {
    version: "1.0.3.1",
    changes: [
      { type: "info", text: "Timber und Veinminer gehen nun schon ab Level 1, da die Level nicht korrekt gespeichert werden" },
    ]
  },
  {
    version: "1.0.3",
    changes: [
      { type: "info", text: "/home funktioniert nun ohne Level, da diese nicht korrekt gespeichert werden" },
    ]
  },
  {
    version: "1.0.2",
    changes: [
      { type: "überarbeitet", text: "/pos geht nun in allen Welten und zeigt den Weltname in der Nachricht mit an" },
      { type: "überarbeitet", text: "/vote ja und /vote nein geht jetzt in jeder Welt" },
      { type: "fix", text: "XP werden jetzt gespeichert" },
    ]
  },
  {
    version: "1.0.1",
    changes: [
      { type: "hotfix", text: "Eisen, Gold und Kupfer schmelzen für die Daily Quests geht nun" },
      { type: "fix", text: "/pos ab Lv 1 und /msg auf Lv 3, da noch nicht funktionsfähig" },
    ]
  },
  {
    version: "1.0.0",
    changes: [
      { type: "info", text: "Release-Version des Winterprojekts" },
    ]
  },
];

const typeColors = {
  neu: "text-green-500",
  überarbeitet: "text-orange-400",
  fix: "text-red-500",
  info: "text-blue-400",
  hotfix: "text-pink-400",
};

const galleryImages = [
    { src: "/minecraft/winterprojekt/2024/wp24-pwk-start.png", alt: "Start des Winterprojekts", caption: "Start des Winterprojekts - PlaywithK" },
    { src: "/minecraft/winterprojekt/2024/wp24-pwk-weg.png", alt: "Wegbau", caption: "Wegbau - PlaywithK" },
    { src: "/minecraft/winterprojekt/2024/wp24-yuri-chicken.png", alt: "itsyuvuri mit ihren Hühnern", caption: "itsyuvuri mit ihren Hühnern - PlaywithK" },
    { src: "/minecraft/winterprojekt/2024/wp24-pwk-lobby.png", alt: "Lobby bei Nacht", caption: "Die Lobby bei Nacht - PlaywithK" },
    { src: "/minecraft/winterprojekt/2024/wp24-luna-pwkkopf.png", alt: "PlaywithK steckt im Stuhl fest", caption: "PlaywithK steckt im Stuhl fest - kxnky_waifu" },
    { src: "/minecraft/winterprojekt/2024/wp24-pwk-crumb.png", alt: "Crumb mag keine Minecarts :c", caption: "Crumb mag keine Minecarts :c - PlaywithK" },
    { src: "/minecraft/winterprojekt/2024/wp24-pwk-laurastuhl.png", alt: "Laura vor PWKs Haus", caption: "Laura vor PWKs Haus - PlaywithK" },
    { src: "/minecraft/winterprojekt/2024/wp24-pwk-allafk.png", alt: "Ganzer Server einfach AFK", caption: "Ganzer Server einfach AFK - PlaywithK" },
    { src: "/minecraft/winterprojekt/2024/wp24-pwk-bloodyterraform.png", alt: "Bloodys Berg ist endlich weg", caption: "Bloodys Berg ist endlich weg - PlaywithK" },
];

export { updates, typeColors, galleryImages };
