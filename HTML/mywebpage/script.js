document.addEventListener("DOMContentLoaded", function() {
    // Define your story data
    const storyData = {
        start: {
            text: "You are in a forest. You see a path to the left and a path to the right.",
            image: "forest.jpg",
            choices: [
                { text: "Go left", next: "leftPath" },
                { text: "Go right", next: "rightPath" }
            ]
        },
        leftPath: {
            text: "You encounter a river. You can swim across or walk along the river.",
            image: "river.jpg",
            choices: [
                { text: "Swim across", next: "swim" },
                { text: "Walk along the river", next: "walk" }
            ]
        },
        rightPath: {
            text: "You find a cabin. You can enter the cabin or continue on the path.",
            image: "cabin.jpg",
            choices: [
                { text: "Enter the cabin", next: "cabin" },
                { text: "Continue on the path", next: "continuePath" }
            ]
        },
        swim: {
            text: "You swim across and reach the other side safely.",
            image: "swim.jpg",
            choices: [
                { text: "Go back", next: "start" }
            ]
        },
        walk: {
            text: "You walk along the river and find a bridge.",
            image: "bridge.jpg",
            choices: [
                { text: "Cross the bridge", next: "bridge" },
                { text: "Go back", next: "leftPath" }
            ]
        },
        cabin: {
            text: "The cabin is empty and spooky.",
            image: "cabin_inside.jpg",
            choices: [
                { text: "Go back", next: "rightPath" }
            ]
        },
        continuePath: {
            text: "You continue on the path and find a treasure chest.",
            image: "treasure.jpg",
            choices: [
                { text: "Open the chest", next: "openChest" },
                { text: "Go back", next: "rightPath" }
            ]
        },
        bridge: {
            text: "You cross the bridge and find a beautiful garden.",
            image: "garden.jpg",
            choices: [
                { text: "Explore the garden", next: "exploreGarden" },
                { text: "Go back", next: "walk" }
            ]
        },
        openChest: {
            text: "You open the chest and find gold!",
            image: "gold.jpg",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        exploreGarden: {
            text: "You explore the garden and find peace.",
            image: "garden.jpg",
            choices: [
                { text: "Restart", next: "start" }
            ]
        }
    };

    // Function to update the story
    function updateStory(part) {
        const storyPart = storyData[part];
        document.getElementById("story-text").innerText = storyPart.text;
        document.getElementById("story-image").src = storyPart.image;

        const choicesDiv = document.getElementById("choices");
        choicesDiv.innerHTML = ""; // Clear previous choices

        storyPart.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.innerText = choice.text;
            button.classList.add("choice-btn");
            button.onclick = () => updateStory(choice.next);
            choicesDiv.appendChild(button);
        });
    }

    // Start the story
    updateStory("start");
});