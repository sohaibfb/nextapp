import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import MasterSettingsLayout from '../../components/MasterSettingsLayout';

export default function SettingsTemplate({ children }) {
  console.log("Setting Template");
  const router = useRouter();
  const path = router.query.path;

return(

  <div></div>
)

}
SettingsTemplate.GetLayout = MasterSettingsLayout;
//SettingsTemplate.GetLayout=SettingsLayout;


