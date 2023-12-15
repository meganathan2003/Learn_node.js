/**
 * Below the we see the Event Emitter it the used for
 * the we write the log what happens in the event and
 * like get the res or send the req to the server like
 *
 * @import(fs) _ file system
 * @import(fs.promises) - fs
 * @import(path)
 * @import(date/time)
 * @import(uuid)
 */

const fs = require("fs");
const fspromises = require("fs/promises");
const path = require("path");
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const logEvents = async (messge) => {
  const dateTime = `${format(new Date(), "ddMMyyyy\tHH:mm:ss")}`;
  const logItems = `${dateTime}\t${uuid}\t${messge}`;
  console.log(logEvents);

  try {
    if (fs.existsSync(path.join(__dirname, "Event Emitter", "logs"))) {
      fs.mkdirSync(path.join(__dirname, "logs"));
    }
    await fspromises.appendFile(
      path.join(__dirname, "Event Emitter", "logs", "eventFileLogs.txt"),
      logItems
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;
