import React from 'react';

export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner2-title',
          children: (
            <span>
              <span>
                <p>中华书画全库</p>
              </span>
            </span>
          ),
        },
        content: {
          className: 'banner2-content',
          children: (
            <span>
              <span>
                <p>
                  近代以来，国内和国际学术界开展过数次大规模的数据整理工作。全库是在这些工作的基础上，对整理结果进行数字化，再配合中华珍宝馆的亿级高清大图，能够极大的帮助您进行传统艺术的教学与研究。
                </p>
              </span>
            </span>
          ),
        },
        button: {
          className: 'banner2-button',
          children: (
            <a href="http://www.share-net.cn:4000/paintweb/login?redirect=%2Fhome">
              立即进入
            </a>
          ),
        },
      },
    ],
  },
};
export const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>书画全库</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: (
          <span>
            <span>
              <span>
                <p>历代书画数据全库，学习书画不可缺少的工具</p>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  video: {
    className: 'content4-video video',
    children: {
      video: 'http://media-a.ltfc.net/cag-preview-886x1980.mp4',
      image: 'images/video-cover-out.jpg',
    },
  },
};
export const Feature30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>最好的书画学习工具</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>资料齐全，服务周到，还有你的个人笔记</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>比最好的课本还要好</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: '全部历代书画图片资料，既可以课堂学习，也可以日常欣赏。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>你的学艺助手</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>下载，打印，制作复制画，一站式解决</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>知识在这里积累</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: '你的课堂所学，平时的思考结果，都可以即时记录在全库中。',
          },
        },
      },
    ],
  },
};
