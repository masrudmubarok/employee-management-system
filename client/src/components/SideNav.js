import React from "react";
import {Link} from 'react-router-dom';

const SideNav = () => {
  return (
    <div>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
            {/* <img src="../../public/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
            <center><span className="brand-text font-weight-light">Employee Management</span></center>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
            {/* Sidebar Menu */}
            <nav className="form-inline mt-3 pb-3 mb-1 d-flex">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
                <li className="nav-item menu-open">
                <Link className="nav-link active" to="/">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                    Dashboard
                    </p>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/home2">
                    <i className="nav-icon fas fa-th" />
                    Widgets
                </Link>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-copy" />
                    <p>
                    Layout Options
                    <i className="fas fa-angle-left right" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Top Navigation</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Top Navigation + Sidebar</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/layout/boxed.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Boxed</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Fixed Sidebar</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Fixed Sidebar <small>+ Custom Area</small></p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/layout/fixed-topnav.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Fixed Navbar</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/layout/fixed-footer.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Fixed Footer</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Collapsed Sidebar</p>
                    </a>
                    </li>
                </ul>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                    <p>
                    Charts
                    <i className="right fas fa-angle-left" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <a href="pages/charts/chartjs.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>ChartJS</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/charts/flot.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Flot</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/charts/inline.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Inline</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/charts/uplot.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>uPlot</p>
                    </a>
                    </li>
                </ul>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-tree" />
                    <p>
                    UI Elements
                    <i className="fas fa-angle-left right" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <a href="pages/UI/general.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>General</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/icons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Icons</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/buttons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Buttons</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/sliders.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Sliders</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/modals.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Modals &amp; Alerts</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/navbar.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Navbar &amp; Tabs</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/timeline.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Timeline</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/UI/ribbons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Ribbons</p>
                    </a>
                    </li>
                </ul>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p>
                    Forms
                    <i className="fas fa-angle-left right" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <a href="pages/forms/general.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>General Elements</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/forms/advanced.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Advanced Elements</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/forms/editors.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Editors</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/forms/validation.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Validation</p>
                    </a>
                    </li>
                </ul>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-table" />
                    <p>
                    Tables
                    <i className="fas fa-angle-left right" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <a href="pages/tables/simple.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Simple Tables</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/tables/data.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>DataTables</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>jsGrid</p>
                    </a>
                    </li>
                </ul>
                </li>
            </ul>
            </nav>
            {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
        </aside>

        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}

    </div>
  )
}

export default SideNav