import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";

const WebsiteFooter = () => {
  return (
    <Box
      id="contact"
      sx={{
        background: "#05051a",
        padding: "4rem 2rem 2rem 2rem",
        borderTop: "1px solid rgba(212, 175, 55, 0.2)",
      }}
    >
      <Box sx={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Grid container spacing={4} sx={{ marginBottom: "3rem" }}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: 2,
              }}
            >
              <Box
                component="img"
                src="/images/logo.svg"
                alt="TrueValue Jewellers"
                sx={{
                  width: "200px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}
            >
              Setting the gold standard in premium bullion trading. Trusted
              worldwide for secure vaulting, reliable physical trading, and
              unmatched asset management.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: "#D4AF37", marginBottom: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                "About Us",
                "Live Rates",
                "Products & Services",
                "Privacy Policy",
              ].map((link) => (
                <Typography
                  key={link}
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                    "&:hover": { color: "#D4AF37" },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: "#D4AF37", marginBottom: 2 }}>
              Contact Us
            </Typography>
            <Typography
              sx={{ color: "rgba(255,255,255,0.6)", marginBottom: 1 }}
            >
              OFFICE NO 103, 1ST FLOOR ALDALLAL BUILDING,
              <br />
              30B Street, Al Daghaya - Al Sabkha, Dubai
            </Typography>
            <Typography
              sx={{ color: "rgba(255,255,255,0.6)", marginBottom: 1 }}
            >
              Phone:{" "}
              <a
                href="tel:0552231986"
                style={{ color: "#D4AF37", textDecoration: "none" }}
              >
                0552231986
              </a>
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
              Email:{" "}
              <a
                href="mailto:info@truevaluebullion.com"
                style={{ color: "#D4AF37", textDecoration: "none" }}
              >
                info@truevaluebullion.com
              </a>
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{ borderColor: "rgba(212, 175, 55, 0.2)", marginBottom: "2rem" }}
        />

        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}
          >
            © {new Date().getFullYear()} TrueValue Jewellers. All Rights
            Reserved. Powered by{" "}
            <span style={{ color: "#D4AF37" }}>Aurify</span>.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WebsiteFooter;
