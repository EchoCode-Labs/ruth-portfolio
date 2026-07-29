import type { SvgIconComponent } from "@mui/icons-material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import BrushRoundedIcon from "@mui/icons-material/BrushRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ViewKanbanRoundedIcon from "@mui/icons-material/ViewKanbanRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";

const toolIconMap: Record<string, SvgIconComponent> = {
  "Google Calendar": CalendarMonthRoundedIcon,
  "Google Meet": VideocamRoundedIcon,
  "Google Docs": DescriptionRoundedIcon,
  "Google Drive": FolderRoundedIcon,
  "Google Workspace": AppsRoundedIcon,
  Canva: BrushRoundedIcon,
  Instagram: InstagramIcon,
  Gmail: MailRoundedIcon,
  Slack: ChatRoundedIcon,
  Trello: ViewKanbanRoundedIcon,
  Asana: TaskAltRoundedIcon,
  Notion: ArticleRoundedIcon,
  "Monday.com": GridViewRoundedIcon,
  Calendly: EventAvailableRoundedIcon,
  Zoom: VideocamRoundedIcon,
  "Microsoft Tools": AppsRoundedIcon,
};

export function getToolIcon(tool: string): SvgIconComponent {
  return toolIconMap[tool] ?? ExtensionRoundedIcon;
}