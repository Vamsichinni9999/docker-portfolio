import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-row items-start justify-around flex-wrap">
          {/* Coding Profiles Section */}
          <div className="min-w-[200px] flex flex-col items-center text-center mb-4">
            <div className="font-bold text-[16px] mb-4">Coding Profiles</div>
            <Link
              href="https://leetcode.com/u/Chinni9999/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <img src="leetcode.png" alt="LeetCode" className="w-5 h-5 mr-2" />
              <span className="text-[15px]">LeetCode</span>
            </Link>
            <Link
              href="https://www.codechef.com/users/chinni9999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <img src="codechef.png" alt="CodeChef" className="w-5 h-5 mr-2" />
              <span className="text-[15px]">CodeChef</span>
            </Link>
            <Link
              href="https://www.hackerrank.com/profile/21341A1231"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <img src="hackerrank.jpeg" alt="HackerRank" className="w-5 h-5 mr-2" />
              <span className="text-[15px]">HackerRank</span>
            </Link>
          </div>

          {/* Badges Section */}
          <div className="min-w-[200px] flex flex-col items-center text-center mb-4">
            <div className="font-bold text-[16px] mb-4">Badges</div>
            <Link
              href="https://www.cloudskillsboost.google/public_profiles/5580636e-3198-4838-9f9e-0bdea674a071"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <img src="google.png" alt="Google Cloud" className="w-5 h-5 mr-2" />
              <span className="text-[15px]">Google Cloud</span>
            </Link>
            <Link
              href="https://learn.microsoft.com/en-us/users/chinniamruthavamsi-6788/achievements"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <img src="micro.jpeg" alt="Microsoft Learn" className="w-5 h-5 mr-2" />
              <span className="text-[15px]">Microsoft Learn</span>
            </Link>
            <Link
              href="https://www.salesforce.com/trailblazer/nxbz4lfep5n2rmq5t7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <img src="sales.jpeg" alt="Sales Force" className="w-5 h-5 mr-2" />
              <span className="text-[15px]">Sales Force</span>
            </Link>
            <Link
              href="https://www.credly.com/users/chinni-amrutha-vamsi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <img src="credly.jpeg" alt="Credly" className="w-5 h-5 mr-2" />
              <span className="text-[15px]">Credly</span>
            </Link>
          </div>

          {/* Certifications Section */}
          <div className="min-w-[200px] flex flex-col items-center text-center mb-4">
            <div className="font-bold text-[16px] mb-4">Certifications</div>
            <Link
              href="https://www.netacad.com/courses/programming/pcap-programming-essentials-python"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <span className="text-[15px]">Python Essentials-1 (Cisco)</span>
            </Link>
            <Link
              href="https://www.netacad.com/courses/programming/pcap-programming-essentials-python"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <span className="text-[15px]">Python Essentials-2 (Cisco)</span>
            </Link>
            <Link
              href="https://www.netacad.com/courses/programming/javascript-essentials"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <span className="text-[15px]">JavaScript Essentials (Cisco)</span>
            </Link>
            <Link
              href="https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <span className="text-[15px]">Microsoft Azure Basics (Microsoft)</span>
            </Link>
            <Link
              href="https://www.infosys.com/services/infosys-learning.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <span className="text-[15px]">Docker Basics (Infosys)</span>
            </Link>
            <Link
              href="https://cloud.google.com/training"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <span className="text-[15px]">Google Cloud Essentials (Google)</span>
            </Link>
            <Link
              href="https://aws.amazon.com/training/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <span className="text-[15px]">AWS Cloud Foundations Academy (AWS)</span>
            </Link>
            <Link
              href="https://www.hackerrank.com/domains/sql"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <span className="text-[15px]">SQL Basics (HackerRank)</span>
            </Link>
            <Link
              href="https://www.hackerrank.com/domains/tutorials/10-days-of-javascript"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <span className="text-[15px]">Java Basics (HackerRank)</span>
            </Link>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] flex flex-col items-center text-center mb-4">
            <div className="font-bold text-[16px] mb-4">About</div>
            <Link
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-2">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-2">GitHub</span>
            </Link>
            <Link
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-2">Pencil Art Works</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-[15px] text-center">
          Contact: vamsichinni2004@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Footer;
