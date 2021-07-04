import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  LinkOutlined,
  DiffOutlined,
  QuestionCircleFilled,
  SettingOutlined,
  AmazonOutlined,
  FileExcelOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { withTranslation } from 'react-i18next';
import JwtIcon from '../../icons/jwtIcon';
import BracketsIcon from '../../icons/brackets';
import Base64Icon from '../../icons/base64';
import RegexIcon from '../../icons/regex';

const { Sider } = Layout;

interface Props {
  theme: 'light' | 'dark' | undefined;
  t(code: string): string;
}
const Sidebar = ({ t, theme }: Props) => {
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <Menu
        mode="inline"
        theme={theme}
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<BracketsIcon fill="white" />}>
          <Link to="/json-formater-validator" style={{ fontSize: '0.9em' }}>
            JSON formatter &amp; validator
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<JwtIcon />}>
          <Link to="/jwt-decoder" style={{ fontSize: '0.9em' }}>
            JWT decoder
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ClockCircleOutlined />}>
          <Link to="/unix-time-converter" style={{ fontSize: '0.9em' }}>
            Unix Time Converter
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<SafetyCertificateOutlined />}>
          <Link to="/ssl-information" style={{ fontSize: '0.9em' }}>
            SSL verification
          </Link>
        </Menu.Item>
        <Menu.Item key="17" icon={<RegexIcon fill="white" />}>
          <Link to="/regex-tester" style={{ fontSize: '0.9em' }}>
            {t('app.sidebar.regextester')}
          </Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<Base64Icon fill="white" />}>
          <Link to="/base64" style={{ fontSize: '0.9em' }}>
            Base64 Encoder/Decoder
          </Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<LinkOutlined />}>
          <Link to="/url-decoder" style={{ fontSize: '0.9em' }}>
            URL Decoder
          </Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<BracketsIcon fill="white" />}>
          <Link to="/json-to-yaml" style={{ fontSize: '0.9em' }}>
            {t('app.sidebar.json-to-yaml')}
          </Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<BracketsIcon fill="white" />}>
          <Link to="/yaml-to-json" style={{ fontSize: '0.9em' }}>
            {t('app.sidebar.yaml-to-json')}
          </Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<DiffOutlined />}>
          <Link to="/diff" style={{ fontSize: '0.9em' }}>
            Diff Viewer
          </Link>
        </Menu.Item>
        <Menu.Item key="10" icon={<DiffOutlined />}>
          <Link to="/remove-dup-lines" style={{ fontSize: '0.9em' }}>
            {t('app.sidebar.remove-duplicate-lines')}
          </Link>
        </Menu.Item>
        <Menu.Item key="11" icon={<DiffOutlined />}>
          <Link to="/spreadsheet-diff" style={{ fontSize: '0.9em' }}>
            {t('app.sidebar.spreadsheetcomparison')}
          </Link>
        </Menu.Item>
        <Menu.Item key="14" icon={<AmazonOutlined />}>
          <Link to="/aws-profile-manager" style={{ fontSize: '0.9em' }}>
            AWS Profile Manager
          </Link>
        </Menu.Item>
        <Menu.Item key="15" icon={<FileExcelOutlined />}>
          <Link to="/json-to-excel-or-csv" style={{ fontSize: '0.9em' }}>
            {t('app.sidebar.json-to-excel-or-csv')}
          </Link>
        </Menu.Item>
        <Menu.Item key="16" icon={<CheckCircleOutlined />}>
          <Link to="/status-tracker" style={{ fontSize: '0.9em' }}>
            {t('app.sidebar.status-tracker')}
          </Link>
        </Menu.Item>
        <Menu.Item key="12" icon={<SettingOutlined />}>
          <Link to="/settings" style={{ fontSize: '0.9em' }}>
            {t('app.sidebar.settings')}
          </Link>
        </Menu.Item>
        <Menu.Item key="13" icon={<QuestionCircleFilled />}>
          <Link to="/about" style={{ fontSize: '0.9em' }}>
            {t('app.sidebar.about')}
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withTranslation()(Sidebar);
