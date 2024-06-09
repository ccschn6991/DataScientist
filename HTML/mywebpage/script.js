document.addEventListener("DOMContentLoaded", function() {
    const basePath = "images/"; // Define the base path for images

    // Define your story data
    const storyData = {
        start: {
            text: "You find yourself waking up within a deep forest. You see a path to the left and a path to the right which both lead into the forest. From the left path you can hear water flowing. From the right path you can not hear anything specific.",
            image: "forest.jpg",
            choices: [
                { text: "Go left", next: "L0" },
                { text: "Go right", next: "R0" }
            ]
        },
        L0: {
            text: "You follow the left path until you encounter a river. You can try and swim across or keep walking along the river.",
            image: "river.jpg",
            choices: [
                { text: "Swim across", next: "L1" },
                { text: "Walk along the river", next: "L2" }
            ]
        },
        R0: {
            text: "You follow the path until you encounter a cabin. You can enter the cabin or continue on the path.",
            image: "cabin.jpg",
            choices: [
                { text: "Enter the cabin", next: "R1" },
                { text: "Continue on the path", next: "R2" }
            ]
        },
        L1: {
            text: "You swim across and reach the other side safely.",
            image: "swim.jpg",
            choices: [
                { text: "Go back", next: "start" }
            ]
        },
        L2: {
            text: "You walk along the river and find a bridge.",
            image: "bridge.jpg",
            choices: [
                { text: "Cross the bridge", next: "L21" },
                { text: "Go back", next: "L0" }
            ]
        },
        R1: {
            text: "The cabin is empty and spooky.",
            image: "cabin_inside.jpg",
            choices: [
                { text: "Go back", next: "R0" }
            ]
        },
        R2: {
            text: "You continue on the path and find a treasure chest.",
            image: "treasure.jpg",
            choices: [
                { text: "Open the chest", next: "R21" },
                { text: "Go back", next: "R0" }
            ]
        },
        L21: {
            text: "You cross the bridge and find a beautiful garden.",
            image: "garden.jpg",
            choices: [
                { text: "Explore the garden", next: "L211" },
                { text: "Go back", next: "L2" }
            ]
        },
        R21: {
            text: "You open the chest and find gold!",
            image: "gold.jpg",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        L211: {
            text: "You explore the garden and find peace.",
            image: "garden.jpg",
            choices: [
                { text: "Restart", next: "start" }
            ]
        }
    };

    // Helper function to get the full image path
    function getImagePath(filename) {
        return basePath + filename;
    }

    // Function to update the story
    function updateStory(part) {
        const storyPart = storyData[part];
        document.getElementById("story-text").innerText = storyPart.text;
        document.getElementById("story-image").src = getImagePath(storyPart.image);

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