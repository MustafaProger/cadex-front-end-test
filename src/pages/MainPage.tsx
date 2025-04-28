import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SectionWrapper = styled.section<{ bgColor?: string }>`
	width: 100%;
	background-color: ${({ bgColor }) => bgColor || "transparent"};
	padding: 60px 0;
`;

const ContentWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;

	@media (max-width: 900px) {
		padding: 0 16px;
	}
`;

const TopSection = styled(SectionWrapper)``;

const TopContent = styled(ContentWrapper)`
	display: flex;
	justify-content: space-between;
	gap: 40px;
	flex-wrap: wrap;
	padding-top: 40px;
`;

const LeftBlock = styled.div`
	flex: 1;
	max-width: 600px;
`;

const Title = styled.h1`
	font-weight: 900;
	font-size: 2.8rem;
	margin-bottom: 20px;
`;

const Description = styled.p`
	font-size: 1.1rem;
	line-height: 1.5;
	color: #333;
`;

const RightBlock = styled.div`
	flex: 1;
	background: #d8d8d8;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 300px;
	min-width: 300px;
	text-align: center;
	position: relative;
	overflow: hidden;
`;

const Iframe = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: none;
`;

const MiddleSection = styled(SectionWrapper)`
	background-color: #fff;
	padding-top: 60px;
	padding-bottom: 40px;
	text-align: center;
`;

const MiddleContent = styled(ContentWrapper)``;

const MiddleTitle = styled.h2`
	font-weight: 900;
	font-size: 2.2rem;
	margin-bottom: 40px;
`;

const CardsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 40px;
	max-width: 1000px;
	margin: 0 auto 40px;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		gap: 24px;
	}
`;

const Card = styled.div`
	text-align: left;
`;

const CardTitle = styled.h3`
	font-weight: 700;
	font-size: 1.1rem;
	margin-bottom: 10px;
`;

const CardText = styled.p`
	font-size: 1rem;
	color: #555;
	line-height: 1.4;
`;

const ContactButton = styled(NavLink)`
	background-color: #111;
	color: white;
	border: 1px solid #111;
	padding: 10px 24px;
	border-radius: 8px;
	font-size: 1rem;
	cursor: pointer;
	transition: background-color 0.3s ease;
	margin: 0 auto;
	text-decoration: none;

	&:hover {
		background-color: transparent;
		color: #111;
	}
`;

const BottomSection = styled(SectionWrapper)`
	background-color: #f4f4f4;
	padding-top: 60px;
	padding-bottom: 60px;
	text-align: center;
`;

const BottomContent = styled(ContentWrapper)``;

const BottomTitle = styled.h2`
	font-weight: 900;
	font-size: 2rem;
	margin-bottom: 24px;
`;

const MainPage: React.FC = () => {
	return (
		<>
			<TopSection bgColor='#f7f7f7'>
				<TopContent>
					<LeftBlock>
						<Title>Join the conversation on Twitter</Title>
						<Description>
							Stay connected to what matters. Discover trending topics, break
							the news, and engage with the world in real time. Share your
							thoughts in 280 characters, follow your interests, and be a part
							of the global conversation.
						</Description>
					</LeftBlock>
					<RightBlock>
						<Iframe
							src='https://www.youtube.com/embed/dQw4w9WgXcQ'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title='What is Twitter?'
						/>
					</RightBlock>
				</TopContent>
			</TopSection>

			<MiddleSection>
				<MiddleContent>
					<MiddleTitle>Why millions use Twitter every day</MiddleTitle>
					<CardsGrid>
						<Card>
							<CardTitle>Real-Time Updates</CardTitle>
							<CardText>
								Get the latest news, sports, and trends as they happen. Twitter
								keeps you in the loop with instant updates from around the
								globe.
							</CardText>
						</Card>
						<Card>
							<CardTitle>Connect with Communities</CardTitle>
							<CardText>
								Follow your favorite creators, join conversations, and build
								your own network. Twitter brings people with shared interests
								together.
							</CardText>
						</Card>
						<Card>
							<CardTitle>Express Yourself</CardTitle>
							<CardText>
								Share your thoughts, ideas, and creativity. From memes to
								movements, your voice can spark conversations and inspire
								change.
							</CardText>
						</Card>
						<Card>
							<CardTitle>Discover Trends</CardTitle>
							<CardText>
								Explore what's trending right now. From breaking news to viral
								moments, see what the world is talking about.
							</CardText>
						</Card>
						<Card>
							<CardTitle>Follow Your Interests</CardTitle>
							<CardText>
								Whether it’s technology, sports, entertainment, or politics,
								tailor your feed to what you care about most.
							</CardText>
						</Card>
						<Card>
							<CardTitle>Join the Conversation</CardTitle>
							<CardText>
								Reply, retweet, and like. Engage with tweets and be part of the
								global dialogue happening every second.
							</CardText>
						</Card>
					</CardsGrid>
					<ContactButton to='/contacts-us'>Contact us</ContactButton>
				</MiddleContent>
			</MiddleSection>

			<BottomSection bgColor='#f4f4f4'>
				<BottomContent>
					<BottomTitle>Ready to see what's happening?</BottomTitle>
					<ContactButton to='/contacts-us'>Contact us</ContactButton>
				</BottomContent>
			</BottomSection>
		</>
	);
};

export default MainPage;
