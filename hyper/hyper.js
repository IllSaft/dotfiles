"use strict";

module.exports = {
    config: {
        updateChannel: 'stable',
        fontSize: 14,
        fontFamily: '"Ubuntu Mono derivative Powerline", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", "RobotoMono for Powerline", monospace',
        fontWeight: 'normal',
        fontWeightBold: 'bold',
        lineHeight: 1.2,
        letterSpacing: 0.20,
        cursorColor: 'rgba(248,28,229,0.8)',
        scrollbarVisible: false,
        cursorAccentColor: '#000',
        cursorShape: 'BLOCK',
        cursorBlink: true,
        foregroundColor: '#fff',
        backgroundColor: '#000',
        selectionColor: 'rgba(248,28,229,0.3)',
        borderColor: '#333',
        css: `
            .header_header {
                background: #1d1f21;
            }
            .tabs_title, .tab_tab {
                color: #fff;
            }
            .tab_active:before {
                border-color: #528bff;
            }
            .term_term {
                opacity: 0.9; // Slightly transparent background
            }
            .splitpane_divider {
                background-color: #528bff; // Custom divider color
            }
            // Additional styles...
        `,
        termCSS: '',
        workingDirectory: '',
        showHamburgerMenu: '',
        showWindowControls: '',
        padding: '8px 6px',
        colors: {
            black: '#282c34',
            red: '#ff6e67',
            green: '#5af78e',
            yellow: '#f3f99d',
            blue: '#57c7ff',
            magenta: '#ff6ac1',
            cyan: '#9aedfe',
            white: '#f1f1f0',
            lightBlack: '#686868',
            lightRed: '#ff6e67',
            lightGreen: '#5af78e',
            lightYellow: '#f3f99d',
            lightBlue: '#57c7ff',
            lightMagenta: '#ff6ac1',
            lightCyan: '#9aedfe',
            lightWhite: '#eff0eb',
        },
        hypest: {
            darkmode: true,
            vibrancy: true,
            vibrancyLevel: 0.46,
            borders: true,
            hideControls: true
        },
        shell: '',
        shellArgs: ['--login'],
        env: {},
        bell: 'SOUND',
        copyOnSelect: true,
        defaultSSHApp: true,
        quickEdit: false,
        macOptionSelectionMode: 'vertical',
        webGLRenderer: true,
        webLinksActivationKey: '',
        disableLigatures: true,
        disableAutoUpdates: false,
        screenReaderMode: false,
        preserveCWD: true,
    },
    plugins: ["hyper-hypest", // Add search functionality within the terminal
    "hyper-search", // Adjust opacity settings
    // Other useful plugins...
    "hyper-opacity", "hyperpower"],
    localPlugins: [],
    keymaps: {
        'editor:copy': 'ctrl+c',          
        'editor:paste': 'ctrl+v',         
        'editor:selectAll': 'ctrl+shift+a', // Changed from 'ctrl+a' to avoid conflict
        'pane:close': 'ctrl+w',           
        'pane:closeAll': 'ctrl+shift+w',  
        'tab:new': 'ctrl+t',              
        'tab:next': 'ctrl+tab',           
        'tab:prev': 'ctrl+shift+tab',     
        'window:devtools': 'ctrl+alt+i',  
        'config:reload': 'ctrl+shift+r',  
        // Additional keymaps...
    },
};

//# sourceMappingURL=config-default.js.map
