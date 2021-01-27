"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Milo",
        email: "milo@milo.com",
        password: "milo",
        homeLocation: "",
        profilePic:
          "https://avatars.githubusercontent.com/u/56648742?s=400&u=895ed658c33e081079782cfe4e7cea1d9bc14459&v=4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bram",
        email: "bram@bram.com",
        password: "bram",
        homeLocation: "",
        profilePic:
          "https://avatars.githubusercontent.com/u/73956679?s=400&u=7f216360cf1d8d2f8b011cc1875a4bbeeb1f4062&v=4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yana",
        email: "yana@yana.com",
        password: "yana",
        homeLocation: "",
        profilePic:
          "https://avatars.githubusercontent.com/u/47885668?s=400&u=1a11e8ea3d217563737cf02aa59fe46774ba796c&v=4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("posts", [
      {
        userId: 1,
        title: "Van Gogh museum",
        location: "Amsterdam",
        votes: 1,
        message: "Van Gogh museum",
        picture: "",
        tags: ["Museum"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: "Vondelpark",
        location: "Amsterdam",
        votes: 1,
        message: "Vondelpark",
        picture: "",
        tags: ["Outdoors"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        title: "de dam",
        location: "Amsterdam",
        votes: 1,
        message: "Dam Square",
        picture: "",
        tags: ["Outdoors"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("comments", [
      {
        postId: 1,
        userId: 1,
        text: "Fantastic pictures",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 2,
        userId: 2,
        text: "Awesome park. Love it!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 3,
        userId: 3,
        text: "Please do not feed birds here!!!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("tags", [
      {
        name: "Museum",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Outdoors",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Zoo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shopping",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Restaurant",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nightlife",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("posts", null, {});
    await queryInterface.bulkDelete("comments", null, {});
    await queryInterface.bulkDelete("tags", null, {});
  },
};
