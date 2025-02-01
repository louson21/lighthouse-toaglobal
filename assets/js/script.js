fetch('directories.json')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched Data:", data);
                let directories = data.directories.results;
                let tableBody = document.getElementById("directory-list");

                if (!directories || typeof directories !== 'object') {
                    console.error("Error: 'results' folder is missing or incorrectly structured.");
                    tableBody.innerHTML = `<tr><td colspan="3" style="color:red;">Failed to load data. Check JSON structure.</td></tr>`;
                    return;
                }

                let counter = 1; // Initialize numbering

                Object.keys(directories).forEach(folder => {
                    let folderData = directories[folder];

                    // Skip invalid folder entries
                    if (!folderData || typeof folderData !== 'object' || !folderData.url) {
                        console.warn(`Skipping invalid folder: ${folder}`, folderData);
                        return;
                    }

                    let pageUrl = folderData.url || "#"; // Use "#" if no URL exists

                    let files = (folderData.files && Array.isArray(folderData.files))
                        ? folderData.files.map(file => `<a href="./${file}" target="_blank">${file.split("/").pop()}</a>`).join("<br>")
                        : "No Lighthouse reports found";

                    let row = `<tr>
                        <td class="number-column">${counter}</td>
                        <td><a href="${pageUrl}" target="_blank" class="external-link">${folder.replace(/--/g, " → ")}</a></td>
                        <td class="file-links">${files}</td>
                    </tr>`;

                    tableBody.innerHTML += row;
                    counter++; // Increment counter
                });
            })
            .catch(error => {
                console.error("Error loading directory list:", error);
                document.getElementById("directory-list").innerHTML = `<tr><td colspan="3" style="color:red;">Failed to load data. Check console for details.</td></tr>`;
            });