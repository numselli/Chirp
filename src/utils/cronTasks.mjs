import {schedule} from 'node-cron'

schedule(cronSchedule, () => {
	db.prepare('SELECT * FROM channels').all().forEach(async row =>
		postChannelYtVid(row, client)
	)
})