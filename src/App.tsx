import React, { useEffect, useState } from 'react';
// Small helpers you might want to keep
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout, Row, Col } from 'antd';
import UserSettings from './services/settings';
import feeder from './utils/FeedReader';

// eslint-disable-next-line import/extensions
import './helpers/external_links.ts';
import SwitchTheme from './components/SwitchTheme';
import Sidebar from './components/Sidebar';
import JSONFormatterValidator from './components/pages/jsonformattervalidator';
import JWTDecoder from './components/pages/jwtdecoder';
import UnixTimeConverter from './components/pages/unixtimeconverter';
import SSLInformation from './components/pages/sslinformation';
import Base64 from './components/pages/base64';
import URLDecoder from './components/pages/urldecoder';
import JSONtoYaml from './components/pages/jsontoyaml';
import YamlToJSON from './components/pages/yamltojson';
import DiffViewer from './components/pages/diffViewer';
import RemoveDupLines from './components/pages/removeDupLines';
import AboutPage from './components/pages/about';
import SettingsPage from './components/pages/settings';
import SpreadSheetComparison from './components/pages/spreadsheetComparison';
import AWSProfileManager from './components/pages/aws-profile-manager';
import JSONToExcelOrCSV from './components/pages/json-to-excel-or-csv';
import StatusTracker from './components/pages/status-tracker';
import RegrexTester from './components/pages/regex-teser';

const { Content, Header } = Layout;

export default function App() {
  const userTheme = UserSettings.Get('settings.theme')
    ? UserSettings.Get('settings.theme')
    : 'dark';

  const userLang = UserSettings.Get('settings.lang')
    ? UserSettings.Get('settings.lang')
    : 'en';

  const [theme = userTheme, setTheme] = useState<string>();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(userLang);
    return () => {
      feeder.destroy();
    };
  }, []);

  const changeTheme = (value: boolean) => {
    const selectedTheme: string = value ? 'dark' : 'light';
    setTheme(selectedTheme);
    UserSettings.Save('settings.theme', selectedTheme);
  };

  return (
    <Router>
      <Layout className={`site-layout-background-${theme}`}>
        <Sidebar theme={theme} />
        <Layout style={{ marginLeft: 200 }}>
          <Header
            className={`site-layout-background-${theme}`}
            style={{ padding: 0, textAlign: 'right' }}
          >
            <Row>
              <Col offset={1}>
                <h3 className={`color-${theme}`}>{t('app.name')}</h3>
              </Col>
              <Col span={6} offset={5}>
                <SwitchTheme defaultTheme={theme} onChange={changeTheme} />
              </Col>
            </Row>
          </Header>
          <Content className="content-layout">
            <Switch>
              <Route
                path="/aws-profile-manager"
                component={AWSProfileManager}
              />
              <Route
                path="/json-to-excel-or-csv"
                component={JSONToExcelOrCSV}
              />
              <Route path="/status-tracker" component={StatusTracker} />
              <Route path="/remove-dup-lines" component={RemoveDupLines} />
              <Route path="/json-to-yaml" component={JSONtoYaml} />
              <Route path="/diff" component={DiffViewer} />
              <Route
                path="/spreadsheet-diff"
                component={SpreadSheetComparison}
              />
              <Route path="/yaml-to-json" component={YamlToJSON} />
              <Route path="/url-decoder" component={URLDecoder} />
              <Route
                path="/json-formater-validator"
                component={JSONFormatterValidator}
              />
              <Route path="/ssl-information" component={SSLInformation} />
              <Route path="/base64" component={Base64} />
              <Route path="/jwt-decoder" component={JWTDecoder} />
              <Route
                path="/unix-time-converter"
                component={UnixTimeConverter}
              />
              <Route path="/regex-tester" component={RegrexTester} />
              <Route path="/about" component={AboutPage} />
              <Route path="/settings" component={SettingsPage} />
              <Route path="/" component={JSONFormatterValidator} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}
