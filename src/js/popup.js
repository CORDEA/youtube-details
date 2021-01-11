window.render = function (data) {
    console.log(data);
    const details = [
        {
            title: 'Details',
            contents: [
                {
                    label: 'TITLE',
                    content: data.snippet.title
                },
                {
                    label: 'DESCRIPTION',
                    content: data.snippet.description
                },
                {
                    label: 'TAGS',
                    content: data.snippet.tags ? data.snippet.tags.join(', ') : ''
                },
                {
                    label: 'PUBLISHED AT',
                    content: data.snippet.publishedAt
                },
                {
                    label: 'DURATION',
                    content: data.contentDetails.duration
                }
            ]
        }
    ];

    if (data.liveStreamingDetails) {
        details.push({
            title: 'Live Streaming Details',
            contents: [
                {
                    label: 'STARTED AT',
                    content: data.liveStreamingDetails.actualStartTime
                },
                {
                    label: 'ENDED AT',
                    content: data.liveStreamingDetails.actualEndTime
                },
                {
                    label: 'CONCURRENT VIEWERS',
                    content: data.liveStreamingDetails.concurrentViewers
                }
            ]
        });
    }

    details.forEach(function (item, i) {
        const container = document.getElementById("container");
        const containerNode = container.content.cloneNode(true);
        containerNode.querySelector('.title').textContent = item.title;
        document.body.appendChild(containerNode);

        item.contents.forEach(function (content) {
            const listItem = document.getElementById("list-item");
            const listItemNode = listItem.content.cloneNode(true);
            listItemNode.querySelector('.label').textContent = content.label;
            listItemNode.querySelector('.content').textContent = content.content;
            document.getElementsByClassName('list')[i].appendChild(listItemNode);
        });
    });
}
