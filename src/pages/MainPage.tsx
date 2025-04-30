import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Typography, Box, Card, CardContent, Button } from "@mui/material";
import {
	Clock,
	Users,
	Pen,
	TrendingUp,
	Heart,
	MessageCircle,
} from "lucide-react";

const SectionWrapper = styled.section<{ bgcolor?: string }>`
	width: 100%;
	background-color: ${({ bgcolor }) => bgcolor || "transparent"};
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

const LeftBlock = styled.div`
	flex: 1;
	max-width: 600px;
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

const buttonSx = {
	background: "black",
	border: "1px solid black",
	borderRadius: "8px",
	transition: "all 0.3s ease !important",
	"&:hover": {
		backgroundColor: "transparent",
		color: "black",
	},
};

const ContactButton = ({ to }: { to: string }) => (
	<Button
		component={NavLink}
		to={to}
		variant='contained'
		color='primary'
		size='large'
		sx={buttonSx}
		data-aos='fade-down'>
		Contact us
	</Button>
);

const cardData = [
	{
		title: "Real-Time Updates",
		text: "Get the latest news, sports, and trends as they happen. Twitter keeps you in the loop with instant updates from around the globe.",
		Icon: Clock,
	},
	{
		title: "Connect with Communities",
		text: "Follow your favorite creators, join conversations, and build your own network. Twitter brings people with shared interests together.",
		Icon: Users,
	},
	{
		title: "Express Yourself",
		text: "Share your thoughts, ideas, and creativity. From memes to movements, your voice can spark conversations and inspire change.",
		Icon: Pen,
	},
	{
		title: "Discover Trends",
		text: "Explore what's trending right now. From breaking news to viral moments, see what the world is talking about.",
		Icon: TrendingUp,
	},
	{
		title: "Follow Your Interests",
		text: "Whether it’s technology, sports, entertainment, or politics, tailor your feed to what you care about most.",
		Icon: Heart,
	},
	{
		title: "Join the Conversation",
		text: "Reply, retweet, and like. Engage with tweets and be part of the global dialogue happening every second.",
		Icon: MessageCircle,
	},
];

type InfoCardProps = {
	title: string;
	text: string;
	Icon: React.ElementType;
	delay?: number;
};

const InfoCard: React.FC<InfoCardProps> = ({
	title,
	text,
	Icon,
	delay = 0,
}) => (
	<Card
		data-aos='fade-down'
		data-aos-duration={400 + delay}
		sx={{
			transition: "all 0.3s ease",
			cursor: "pointer",
			"&:hover": {
				transform: "translateY(-5px) !important",
				boxShadow: 3,
			},
		}}>
		<CardContent>
			<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
				<Icon size={24} />
				<Typography variant='h6'>{title}</Typography>
			</Box>
			<Typography
				variant='body2'
				sx={{ color: "text.secondary", fontSize: 16, textAlign: "start" }}>
				{text}
			</Typography>
		</CardContent>
	</Card>
);

const MainPage: React.FC = () => {
	return (
		<>
			<SectionWrapper bgcolor='#f7f7f7'>
				<ContentWrapper
					style={{
						display: "flex",
						justifyContent: "space-between",
						gap: 40,
						flexWrap: "wrap",
						paddingTop: 40,
					}}>
					<LeftBlock>
						<Typography
							variant='h3'
							fontWeight={900}
							gutterBottom
							data-aos='fade-down'>
							Join the conversation on Twitter
						</Typography>
						<Typography
							variant='body1'
							color='text.secondary'
							data-aos='fade-down'>
							Stay connected to what matters. Discover trending topics, break
							the news, and engage with the world in real time. Share your
							thoughts in 280 characters, follow your interests, and be a part
							of the global conversation.
						</Typography>
					</LeftBlock>
					<RightBlock data-aos='fade-down'>
						<Iframe
							src='https://www.youtube.com/embed/dQw4w9WgXcQ'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title='What is Twitter?'
						/>
					</RightBlock>
				</ContentWrapper>
			</SectionWrapper>

			<SectionWrapper bgcolor='#fff'>
				<ContentWrapper>
					<Box textAlign='center'>
						<Typography
							sx={{ mb: 3 }}
							variant='h4'
							fontWeight={900}
							gutterBottom
							data-aos='fade-down'>
							Why millions use Twitter every day
						</Typography>
					</Box>
					<CardsGrid>
						{cardData.map((card, index) => (
							<InfoCard
								key={card.title}
								title={card.title}
								text={card.text}
								Icon={card.Icon}
								delay={index * 100}
							/>
						))}
					</CardsGrid>
					<Box
						display='flex'
						justifyContent='center'>
						<ContactButton to='/contact-us' />
					</Box>
				</ContentWrapper>
			</SectionWrapper>

			<SectionWrapper bgcolor='#f4f4f4'>
				<ContentWrapper>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						textAlign='center'
						gap={2}
						sx={{
							flexDirection: "row",
							"@media (max-width:550px)": {
								flexDirection: "column",
							},
						}}>
						<Typography
							variant='h5'
							fontWeight={900}
							gutterBottom
							data-aos='fade-right'>
							Ready to see what's happening?
						</Typography>
						<ContactButton to='/contact-us' />
					</Box>
				</ContentWrapper>
			</SectionWrapper>
		</>
	);
};

export default MainPage;
