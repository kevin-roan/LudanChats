import React from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="">
      <Card className="w-full h-screen bg-[#90B4CE]">
        <List>
          <Link to="/chatroom">
            <ListItem>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="candice"
                  src="https://yt3.ggpht.com/a-/AN66SAw_M_11Alp1TIDompdqcTC94F-T-BUKgNgSFw=s900-mo-c-c0xffffffff-rj-k-no"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Ludan Discussion
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal "
                >
                  Ludangupta: Kisne maara
                </Typography>
              </div>
            </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="alexander"
                src="https://i.kym-cdn.com/photos/images/facebook/001/816/935/549.png"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                Doge Adhalath
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Vimdhayak: Bhai jaan
              </Typography>
            </div>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="emma"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EX2ZbnQ1KWc8b8ZVuvGh5wHaMh%26pid%3DApi&f=1&ipt=2a3387be918b81656820f77d3377959737d1b82e12de7601614393207612236f&ipo=images"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                Vimal Pan Masala
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Harshit Tiwari: beta
              </Typography>
            </div>
          </ListItem>
        </List>
      </Card>
    </div>
  );
}
