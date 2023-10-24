document.addEventListener("DOMContentLoaded", function () {
	// Fetch the data
	fetch("data.json")
		.then((response) => response.json())
		.then((data) => {
			const dataList = document.getElementById("data-list");

			// Define an array of specific colors
			const colors = [
				"hsl(0, 100%, 67%)",
				"hsl(39, 100%, 56%)",
				"hsl(166, 100%, 37%)",
				"hsl(234, 85%, 45%)",
			]; // Add as many colors as needed

			// Iterate through the data and create elements
			data.forEach((item, index) => {
				const listItem = document.createElement("li");
				const color = colors[index % colors.length]; // Cycle through colors if there are more items than colors

				listItem.innerHTML = `
				<div class="flex py-4">
					<img class="w-16 h-16" src="${item.icon}" alt="${item.category}">
					<h2 class="text-base font-semibold pl-4" style="color: ${color}">${item.category}</h2>
					<p class="text-darkGrayBlue font-bold pl-4"> ${item.score}  <span class="text-lightLavender">/ 100</span></p>
				</div>
				`;
				dataList.appendChild(listItem);
			});
		})
		.catch((error) => console.error("Error fetching data:", error));
});
