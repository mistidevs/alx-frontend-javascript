import ClassRoom from "./0-classroom.js";

export default class initializeRooms extends ClassRoom {
  constructor() {
    return [
      ClassRoom(19),
      ClassRoom(20),
      ClassRoom(34)
    ]
  }
}
