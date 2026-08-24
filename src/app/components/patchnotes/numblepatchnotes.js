const patchNotes = [
    {
        version: "0.6.3-prerelease",
        date: "Upcoming",
        title: "Playtest - Update 2",
        description:
            " ",

        changes: {
            added: [
                "Added supporter pack functionality",
                "Added a tooltip system",
                "Added an UI-Scaler setting",
                "Added a custom Cursor",
                "Added animations for PopUp-Overlays",
                "The current round can now get restarted when clicking \"R\" or the north-button on Controller",
            ],

            improved: [
                "Reworked ColorThemes",
                "   ColorThemes are now unlockable with achievements",
                "   The Game-Logo changes color with the theme now",
                "   Added a Cyberpunk-Themed Color Theme",
                "   Added a Color Picker and RGB Rainbow Theme (both for Supporter Pack)",
            ],

            fixed: [
                "Fixed the Back-System, so its not going through the complete history",
                "Fixed Sound-Settings now apply in Startup",
                "Fixed Startup-Audio playing in MainMenuScene when startup is skipped",
                "Fixed Popup-Overlays now blocking inputs in the background",
                "Fixed Hover-Animation getting stuck in current size when stopped hovering",
                "Fixed Custom mode timer duration showing in seconds, it now displays a formatted time  (e.g. 1:30)",
                "Fixed Timer slider in Custom Mode Settings, it is now disabled when the timer is turned off",
                "Fixed Mobile now applying settings correctly",
                "Fixed CustomMode not starting",
                "Fixed CustomMode Input going back to the mode select screen",
            ],

            removed: [],
        },
    },

    {
        version: "0.6.2-prerelease",
        date: "06.08.2026",
        title: "Playtest - Update 1",
        description:
            " ",

        changes: {
            added: [
                "Added Discord Rich Presence Integration",
                "Updated Steam Rich Presence",
                "Added stats to the game",
                "Dropdown-Menu can now be toggled with the tabulator key on keyboard",
                "Credits are now up-to-date",
                "Dropdown-Menu now closes when changing panels",
                "Added missing translations for german and english (others WIP)"
            ],

            improved: [
                "All UI-Elements now have sounds, animations and the correct color (including scrollbars, dropdowns, etc.)",
            ],

            fixed: [
                "Fixed Achievements not unlocking",
                "Fixed Dropdown-Menu getting bigger when hovered",
                "Fixed spam-clicking buttons to load a scene multiple times simultaniously",
                "Fixed the Countdown-Timer ticking down while in menus or Result-Screen",
                "Fixed Back Button showing in wrong places"
            ],

            removed: [],
        },
    },
];

export default patchNotes;