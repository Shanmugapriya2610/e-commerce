import React from 'react';

const DashboardIcon = ({ active }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M14.0754 0H17.4614C18.8636 0 19.9999 1.14585 19.9999 2.55996V5.97452C19.9999 7.38864 18.8636 8.53449 17.4614 8.53449H14.0754C12.6731 8.53449 11.5369 7.38864 11.5369 5.97452V2.55996C11.5369 1.14585 12.6731 0 14.0754 0Z" fill={active ? `#ffffff` : `#8A92A6`} />
        <path fillRule="evenodd" clipRule="evenodd" d="M2.53852 0H5.92449C7.32676 0 8.46301 1.14585 8.46301 2.55996V5.97452C8.46301 7.38864 7.32676 8.53449 5.92449 8.53449H2.53852C1.13626 8.53449 0 7.38864 0 5.97452V2.55996C0 1.14585 1.13626 0 2.53852 0ZM2.53852 11.4655H5.92449C7.32676 11.4655 8.46301 12.6114 8.46301 14.0255V17.44C8.46301 18.8532 7.32676 20 5.92449 20H2.53852C1.13626 20 0 18.8532 0 17.44V14.0255C0 12.6114 1.13626 11.4655 2.53852 11.4655ZM17.4615 11.4655H14.0755C12.6732 11.4655 11.537 12.6114 11.537 14.0255V17.44C11.537 18.8532 12.6732 20 14.0755 20H17.4615C18.8637 20 20 18.8532 20 17.44V14.0255C20 12.6114 18.8637 11.4655 17.4615 11.4655Z" fill={active ? `#ffffff` : `#8A92A6`} />
    </svg>

);

export default DashboardIcon;