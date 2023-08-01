import { Stack, Typography, } from "@mui/material";
import { HiCurrencyBangladeshi, HiOutlineExternalLink } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function AmountStatusCard({ cardTitle = "Sample Title", cardAmount = 0.00, href = '/dashboard', bgcolor = "#2C3E50", color = "#F7F9F9", cardStatus = null, cardStatusAmount = null, showStatus = true }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Stack
            sx={{ overflow: "hidden", position: "relative" }}
            bgcolor={bgcolor}
            color={color}
            className="rad-grad"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}  >
            <HiCurrencyBangladeshi size={50}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "#566573",
                }} />


            <Stack p={3}>
                <Typography variant={"h6"} fontWeight={"bold"}>
                    {cardTitle}
                </Typography>
                <Typography variant={'h5'} fontSize={{ xs: '2rem', md: '1.5rem' }} fontWeight={"bold"} sx={{ my: 1.5 }}>
                    <sup>
                        <HiCurrencyBangladeshi size={25} />
                    </sup>
                    {cardAmount.toFixed(2)}
                </Typography>
            </Stack>

            <NavLink
                to={href}
                style={{
                    textAlign: "center",
                    fontSize: "0.9rem",
                    padding: "0.3rem 0",
                    backgroundColor: "#566573",
                    color: color,
                    visibility: isHovered ? "visible" : "hidden",
                }}   >
                Learn more <HiOutlineExternalLink size={15} />
            </NavLink>
        </Stack>
    );
}
