import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificates } from "@/data/content";

export default function Certifications() {
  return (
    <PageSection tone="soft" id="certificates">
      <Stack spacing={6}>
        <SectionHeading eyebrow="Training & certificates" title="Formal training behind the practical experience" />
        <Grid container spacing={4}>
          {certificates.map((cert) => (
            <Grid key={cert.title} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%", overflow: "hidden" }}>
                <Stack sx={{ height: "100%" }}>
                  <Box
                    component="a"
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${cert.title} certificate`}
                    sx={{
                      display: "block",
                      width: "100%",
                      aspectRatio: "4 / 3",
                      p: { xs: 2, sm: 2.5 },
                      borderBottom: "1px solid",
                      borderColor: "divider",
                      bgcolor: "common.white",
                    }}
                  >
                    {/* Framed "window" onto the PDF: padding above creates the
                        matting, this box clips and shadows the document itself.
                        `view=Fit` tells the browser's PDF viewer to fit the
                        WHOLE page inside the frame — nothing gets cropped,
                        even if the box's aspect ratio doesn't exactly match
                        the certificate's. */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        borderRadius: 2,
                        bgcolor: "common.white",
                        boxShadow: "0 1px 4px rgba(36, 24, 17, 0.12)",
                      }}
                    >
                      <Box
                        component="iframe"
                        src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                        title={`${cert.title} preview`}
                        tabIndex={-1}
                        sx={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                          pointerEvents: "none",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          bgcolor: "background.paper",
                          border: "1px solid",
                          borderColor: "divider",
                          boxShadow: "0 4px 10px rgba(36, 24, 17, 0.18)",
                        }}
                      >
                        <PictureAsPdfRoundedIcon sx={{ fontSize: 16, color: "brand.taupe" }} />
                      </Box>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3.5, flexGrow: 1, display: "flex" }}>
                    <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
                      <Typography variant="eyebrow" color="text.secondary">
                        {cert.issuer} · {cert.year}
                      </Typography>
                      <Typography variant="h5">{cert.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                        {cert.description}
                      </Typography>

                      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ pt: 1 }}>
                        <Button
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          size="small"
                          startIcon={<OpenInNewRoundedIcon fontSize="small" />}
                        >
                          View certificate
                        </Button>
                        <Tooltip title="Download PDF">
                          <IconButton
                            component="a"
                            href={cert.file}
                            download
                            aria-label={`Download ${cert.title} as PDF`}
                            size="small"
                          >
                            <DownloadRoundedIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </PageSection>
  );
}