import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import ReceiptsIcon from '../../assets/images/timeline/recipts.png';
import EntityIcon from '../../assets/images/timeline/entity.png';
import TableIcon from '../../assets/images/timeline/table.png';
import DownloadIcon from '../../assets/images/timeline/download.png';

const TimelineComponent = () => {
    return (
        <div>
            <h2 className='timelinestyles'>Steps to Use</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img src={ReceiptsIcon} alt="Upload Receipts" className="timeline-icon receipts-icon" />}
                >
                    <h3 className="vertical-timeline-element-title">Upload Receipts</h3>
                    <p>Upload your Receipts in the application</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(131, 74, 157, 1)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(131, 74, 157, 1)', color: '#fff' }}
                    icon={<img src={EntityIcon} alt="Entity Extraction" className="timeline-icon entity-icon" />}
                >
                    <h3 className="vertical-timeline-element-title">Entity Extraction</h3>
                    <p>Extract entities from the uploaded receipts</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(54, 127, 75, 1)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img src={TableIcon} alt="Table Extraction" className="timeline-icon table-icon" />}
                >
                    <h3 className="vertical-timeline-element-title">Table Extraction</h3>
                    <p>Extract tables from the extracted entities</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 120, 118, 1)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img src={DownloadIcon} alt="Download" className="timeline-icon download-icon" />}
                >
                    <h3 className="vertical-timeline-element-title">Download JSON/Download Excel</h3>
                    <p>Download the extracted data in JSON or Excel format</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>

    );
};

export default TimelineComponent;
