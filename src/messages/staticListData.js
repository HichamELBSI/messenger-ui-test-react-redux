// @flow
import moment, { type Moment } from "moment";

export type MessageT = {
  uniqueID: number,
  message: string,
  sent: boolean,
  date: Moment,
  private: boolean
};

const messageDateForExemple = moment().set({ hour: 5, minute: 12, second: 13 });

const staticMessagesList: $ReadOnlyArray<Moment> = [
  {
    uniqueID: 1,
    message: "Hi !",
    sent: false,
    private: false,
    date: messageDateForExemple
  },
  {
    uniqueID: 2,
    message: "This is my email xyz@gmail.com",
    sent: false,
    private: true,
    date: messageDateForExemple
  },
  {
    uniqueID: 3,
    message: "Are you here !",
    sent: false,
    private: false,
    date: messageDateForExemple.add(40, "second")
  },
  {
    uniqueID: 4,
    message: "Hello !, yes",
    sent: true,
    private: false,
    date: messageDateForExemple.add(70, "second")
  },
  {
    uniqueID: 5,
    message: "Can you send me your mail address please",
    sent: false,
    private: false,
    date: messageDateForExemple.add(70, "second")
  },
  {
    uniqueID: 6,
    message: "okay elabbassih@gmail.com",
    sent: true,
    private: true,
    date: messageDateForExemple.add(70, "second")
  }
];

export default staticMessagesList;
