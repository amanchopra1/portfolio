import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
`;

const Wrapper = styled.div`
    // Add your styling for the wrapper if needed
`;

const MainTitle = styled.h1`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_primary};
    text-align: center;  // Center the text
`;

const Title2 = styled.h2`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    // Add your styling for the timeline section if needed
`;

const YouTubeCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const YouTubeCard = ({ videoUrl }) => {
    return (
        <YouTubeCardContainer>
            <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </YouTubeCardContainer>
    );
};

const Index = () => {
    // Sections with headings and descriptions
    const sections = [
        {
            title: "Bhagavad Gita Deep Dive on YouTube",
            description: "Dive into the profound teachings of the Bhagavad Gita through a systematic YouTube course. Uncover timeless insights chapter by chapter.",
            videoUrl: "https://www.youtube.com/embed/dCjHT8pReBA",
        },
        {
            title: "Team Morpankh's Bhajan Mashup",
            description: "Experience the divine blend of bhajans in Team Morpankh's captivating mashup. Let the harmonious melodies elevate your spirit.",
            videoUrl: "https://www.youtube.com/embed/rAJm79SXKH8",
        },
        {
            title: "Hare Krishna Mahamantra Guitar Tutorials",
            description: "Master the art of playing the Hare Krishna Mahamantra on the guitar through easy-to-follow tutorials. Infuse your music with spiritual depth.",
            videoUrl: "https://www.youtube.com/embed/tf1Hfa8S6jQ",
        },
    ];

    return (
        <Container id="experience">
            <Wrapper>
                <MainTitle>Spiritual Hub</MainTitle>
                <TimelineSection>
                    <Timeline>
                        {sections.map((section, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Title2>{section.title}</Title2>
                                    <YouTubeCard videoUrl={section.videoUrl} />
                                    <Desc>{section.description}</Desc>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Index;
