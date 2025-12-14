import colors from "colors";

export const LogLevel = {
    CRITICAL: 0,
    ERROR: 1,
    WARNING: 2,
    INFO: 3,
    DEBUG: 4,
    LOG: 5,
}

const levelNames = {
    0: "CRITICAL",
    1: "ERROR",
    2: "WARNING",
    3: "INFO",
    4: "DEBUG",
    5: "LOG",
}

const levelColors = {
    CRITICAL: colors.bgRed.black,
    ERROR: colors.bgRed.black,
    WARNING: colors.bgYellow.black,
    INFO: colors.bgGreen.black,
    DEBUG: colors.bgBlue.black,
    LOG: colors.bgWhite.black,
}

class Logger {

    constructor(minLogLevel = LogLevel.DEBUG) {
        this.minLogLevel = minLogLevel;
    }

    log(level, message = "", functionName = "", location = "",) {

        //Don't print log levels bigger than minimum
        if (process.env.NODE_ENV !== "development") {
            if (level >= this.minLogLevel)
                return;
        }

        const levelName = levelNames[level];
        const levelColor = levelColors[levelName];

        const date = new Date();
        const time = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} | ${date.toLocaleTimeString()}`

        const messageFormat = `${levelColor(`[${levelColor(levelName)}]`)}: \n\n[Time]: ${time} \n[Function]: ${functionName} \n[Location]: ${location} \n[Error Message]: \n${message} \n\n`

        switch (true) {
            case level <= LogLevel.ERROR: {
                console.error(messageFormat);
                break;
            }
            case level <= LogLevel.WARNING: {
                console.warn(messageFormat);
                break;
            }
            case level <= LogLevel.INFO: {
                console.info(messageFormat);
                break;
            }
            case level <= LogLevel.DEBUG: {
                console.debug(messageFormat);
                break;
            }
            default: {
                console.log(messageFormat);
            }
        }
    }

    critical(message, functionName, location) {
        this.log(LogLevel.CRITICAL, message, functionName, location);
    }
    error(message, functionName, location) {
        this.log(LogLevel.ERROR, message, functionName, location);
    }
    warning(message, functionName, location) {
        this.log(LogLevel.WARNING, message, functionName, location);
    }
    info(message, functionName, location) {
        this.log(LogLevel.INFO, message, functionName, location);
    }
    debug(message, functionName, location) {
        this.log(LogLevel.DEBUG, message, functionName, location);
    }

}

export default new Logger(LogLevel.DEBUG);