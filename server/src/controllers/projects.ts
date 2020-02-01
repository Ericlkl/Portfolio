import { RequestHandler } from 'express';
import ProjectModel from '../models/Project';
import { Project } from '../types';
import { getDataFromCache, saveDataToCache } from '../services/cache';

// {
// 	"name": "Pineland Music School",
// 	"language": "C#",
// 	"cover": "https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
// 	"stacks": ["C#", "IOS", "Android", "Mysql"],
// 	"logo": "https://i.imgur.com/P3ixHeb.png",
// 	"desc": "GeoApp for GIS",
// 	"platforms": ["Android", "IOS"],
// 	"repo": "https://github.com/kittaye/GeoApp",
// 	"download": ["https://play.google.com/store/apps/details?id=com.Groundsman.GeoApp&hl=en_IE", "https://apps.apple.com/au/app/groundsman/id1454150064"],
// 	"intro": "Groundsman is a simple and intuitive app for recording and mapping location data. Supported data types include, point, linestring and polygon, which are all standardised in the GeoJSON format. <br/>This data can be managed in the features list, as well as exported from the application for external use. Location data can be added manually or by using the device's current location. Alternatively, valid GeoJSON may be imported from a file and added to the features list. Groundsman also supports the periodic logging of location data that can be exported and read by other applications.",
// 	"screenshots": ["https://i.imgur.com/LQa2trF.jpg", "https://i.imgur.com/aPnpNns.jpg", "https://i.imgur.com/MgEYuOo.jpg", "https://i.imgur.com/Avq8rfz.jpg", "https://i.imgur.com/KgDFxiK.jpg", "https://i.imgur.com/4k9Aurb.jpg"],
// 	"information": {
// 		"Developed By": "Eric Lee & QUT GeoApp Team",
// 		"Size": "36.4Mb",
// 		"Category": "Education",
// 		"Language": "English"
// 	}
// }

export const createProject: RequestHandler = async (req, res) => {
  try {
    const newProject = await new ProjectModel(req.body).save();
    res.json(newProject);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
};

export const getProject: RequestHandler = async (req, res) => {
  const projectKey = `project:${req.params.id}`;
  const cacheData = await getDataFromCache(projectKey);

  if (cacheData) {
    return res.json(cacheData);
  }

  try {
    const project = await ProjectModel.findById(req.params.id);

    saveDataToCache(projectKey, 3600, project);

    return res.json(project);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
};

export const getAllProjects: RequestHandler = async (req, res) => {
  const cachekey = `project:all`;
  const cacheData = await getDataFromCache(cachekey);
  if (cacheData) {
    return res.json(cacheData);
  }

  try {
    const projects = await ProjectModel.find();
    saveDataToCache(cachekey, 3600, projects);
    return res.json(projects);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: error.message });
  }
};
