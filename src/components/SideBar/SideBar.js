import React from 'react';
import { withRouter } from 'react-router-dom';
import { MdLightbulbOutline, MdLabelOutline, MdEdit } from 'react-icons/md';
import { BsBell, BsTrash } from 'react-icons/bs';
import { FaArchive } from 'react-icons/fa';
import TitledButton from './../../UI/TitledButton/TitledButton';
import { Link } from 'react-router-dom';

const SideBar = ({ classes, isExpanded, location }) => {
  console.log(location);
  const isActive = path => {
    return location.pathname === path;
  };

  return (
    <div className={classes}>
      <div className="flex flex-col h-screen h-full bg-white">
        <div>
          <Link to="/home">
            <TitledButton
              label="Note"
              isExpanded={isExpanded}
              isActive={isActive('/home') ? true : false}
            >
              <MdLightbulbOutline size="1.5em" />
            </TitledButton>
          </Link>
          <Link to="/reminders">
            <TitledButton
              label="Rappels"
              isExpanded={isExpanded}
              isActive={isActive('/reminders') ? true : false}
            >
              <BsBell size="1.5em" />
            </TitledButton>
          </Link>
          <Link to="/label/javascript">
            <TitledButton
              label="javascript"
              isActive={isActive('/label/javascript') ? true : false}
            >
              <MdLabelOutline size="1.5em" />
            </TitledButton>
          </Link>
          <Link to="/label/Projects">
            <TitledButton
              label="Projects"
              isActive={isActive('/label/Projects') ? true : false}
            >
              <MdLabelOutline size="1.5em" />
            </TitledButton>
          </Link>
          <Link
            to="/label/tailwindcss"
            isActive={isActive('/label/tailwindcss') ? true : false}
          >
            <TitledButton label="Projects" isExpanded={isExpanded}>
              <MdLabelOutline size="1.5em" />
            </TitledButton>
          </Link>

          <TitledButton label="Modifier les libellés" isExpanded={isExpanded}>
            <MdEdit size="1.5em" />
          </TitledButton>
          <Link to="/archive">
            <TitledButton
              label="Archive"
              isActive={isActive('/archive') ? true : false}
            >
              <FaArchive size="1.5em" />
            </TitledButton>
          </Link>

          <Link to="/trash">
            <TitledButton
              label="Corbeille"
              isActive={isActive('/trash') ? true : false}
            >
              <BsTrash size="1.5em" />
            </TitledButton>
          </Link>
        </div>
        {isExpanded && (
          <div className="mt-auto mt-auto">
            <div className="flex flex-wrap px-8 pb-8 text-sm">
              <a href="/">Confidentialité</a>
              <span className="px-2">&bull;</span>
              <a href="/">Conditions</a>
              <span className="px-2">&bull;</span>
              <a href="/">Licences Open Source</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(SideBar);
