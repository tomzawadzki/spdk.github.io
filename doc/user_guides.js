var user_guides =
[
    [ "System Configuration User Guide", "system_configuration.html", [
      [ "IOMMU configuration", "system_configuration.html#iommu_config", null ],
      [ "Running SPDK as non-privileged user", "system_configuration.html#system_configuration_nonroot", [
        [ "Hugetlbfs access", "system_configuration.html#autotoc_md1435", null ],
        [ "Device access", "system_configuration.html#system_configuration_nonroot_device_access", null ],
        [ "Memory constraints", "system_configuration.html#system_configuration_nonroot_memory_constraints", [
          [ "Increasing the memlock limit permanently", "system_configuration.html#autotoc_md1436", null ],
          [ "Increasing the memlock for a specific process", "system_configuration.html#autotoc_md1437", null ]
        ] ]
      ] ]
    ] ],
    [ "SPDK Libraries", "libraries.html", [
      [ "Directory Structure", "libraries.html#structure", [
        [ "lib", "libraries.html#lib", null ],
        [ "module", "libraries.html#module", null ]
      ] ],
      [ "Library Conventions", "libraries.html#conventions", [
        [ "Headers", "libraries.html#headers", null ],
        [ "Naming Conventions", "libraries.html#naming", null ],
        [ "Map Files", "libraries.html#map", null ]
      ] ],
      [ "SPDK Shared Objects", "libraries.html#shared_objects", [
        [ "Shared Object Versioning", "libraries.html#versioning", null ],
        [ "Linking to Shared Objects", "libraries.html#so_linking", null ],
        [ "Replacing the env abstraction", "libraries.html#env_replacement", null ]
      ] ],
      [ "SPDK Static Objects", "libraries.html#static_objects", null ]
    ] ],
    [ "Linking SPDK applications with pkg-config", "pkgconfig.html", null ],
    [ "An Overview of SPDK Applications", "app_overview.html", [
      [ "Configuring SPDK Applications", "app_overview.html#app_config", [
        [ "Command Line Parameters", "app_overview.html#app_cmd_line_args", [
          [ "Configuration file", "app_overview.html#cmd_arg_config_file", null ],
          [ "Limit coredump", "app_overview.html#cmd_arg_limit_coredump", null ],
          [ "Tracepoint group mask", "app_overview.html#cmd_arg_limit_tpoint_group_mask", null ],
          [ "Deferred initialization", "app_overview.html#cmd_arg_deferred_initialization", null ],
          [ "Create just one hugetlbfs file", "app_overview.html#cmd_arg_single_file_segments", null ],
          [ "Multi process mode", "app_overview.html#cmd_arg_multi_process", null ],
          [ "Memory size", "app_overview.html#cmd_arg_memory_size", null ],
          [ "Disable PCI access", "app_overview.html#cmd_arg_disable_pci_access", null ],
          [ "PCI address blocked and allowed lists", "app_overview.html#cmd_arg_pci_blocked_allowed", null ],
          [ "Unlink hugepage files after initialization", "app_overview.html#cmd_arg_huge_unlink", null ],
          [ "Log flag", "app_overview.html#cmd_arg_log_flags", null ]
        ] ],
        [ "CPU mask", "app_overview.html#cpu_mask", [
          [ "Example", "app_overview.html#autotoc_md823", null ]
        ] ]
      ] ]
    ] ],
    [ "iSCSI Target", "iscsi.html", [
      [ "iSCSI Target Getting Started Guide", "iscsi.html#iscsi_getting_started", null ],
      [ "Prerequisites", "iscsi.html#iscsi_prereqs", null ],
      [ "Introduction", "iscsi.html#autotoc_md824", [
        [ "Assigning CPU Cores to the iSCSI Target", "iscsi.html#iscsi_config_lcore", null ]
      ] ],
      [ "Configuring iSCSI Target via RPC method", "iscsi.html#iscsi_rpc", [
        [ "Portal groups", "iscsi.html#autotoc_md825", null ],
        [ "Initiator groups", "iscsi.html#autotoc_md826", null ],
        [ "Target nodes", "iscsi.html#autotoc_md827", null ]
      ] ],
      [ "Configuring iSCSI Initiator", "iscsi.html#iscsi_initiator", [
        [ "Setup", "iscsi.html#autotoc_md828", null ],
        [ "Discovery", "iscsi.html#autotoc_md829", null ],
        [ "Connect to target", "iscsi.html#autotoc_md830", null ],
        [ "Disconnect from target", "iscsi.html#autotoc_md831", null ],
        [ "Deleting target node cache", "iscsi.html#autotoc_md832", null ],
        [ "Finding /dev/sdX nodes for iSCSI LUNs", "iscsi.html#autotoc_md833", null ],
        [ "Tuning", "iscsi.html#autotoc_md834", null ],
        [ "Example: Configure simple iSCSI Target with one portal and two LUNs", "iscsi.html#autotoc_md835", [
          [ "Configure iSCSI Target", "iscsi.html#autotoc_md836", null ],
          [ "Configure initiator", "iscsi.html#autotoc_md837", null ]
        ] ]
      ] ],
      [ "iSCSI Hotplug", "iscsi.html#iscsi_hotplug", null ],
      [ "iSCSI Login Redirection", "iscsi.html#iscsi_login_redirection", null ]
    ] ],
    [ "NVMe over Fabrics Target", "nvmf.html", [
      [ "NVMe-oF Target Getting Started Guide", "nvmf.html#nvmf_getting_started", null ],
      [ "RDMA transport support", "nvmf.html#nvmf_rdma_transport", [
        [ "Prerequisites", "nvmf.html#nvmf_prereqs", null ],
        [ "Prerequisites for InfiniBand/RDMA Verbs", "nvmf.html#nvmf_prereqs_verbs", null ],
        [ "Prerequisites for RDMA NICs", "nvmf.html#nvmf_prereqs_rdma_nics", null ],
        [ "Finding RDMA NICs and associated network interfaces", "nvmf.html#autotoc_md1293", [
          [ "Mellanox ConnectX-3 RDMA NICs", "nvmf.html#autotoc_md1295", null ],
          [ "Mellanox ConnectX-4 RDMA NICs", "nvmf.html#autotoc_md1296", null ],
          [ "Assigning IP addresses to RDMA NICs", "nvmf.html#autotoc_md1297", null ]
        ] ],
        [ "RDMA Limitations", "nvmf.html#nvmf_rdma_limitations", null ]
      ] ],
      [ "TCP transport support", "nvmf.html#nvmf_tcp_transport", null ],
      [ "FC transport support", "nvmf.html#nvmf_fc_transport", [
        [ "Broadcom FC LLD code", "nvmf.html#autotoc_md1300", null ],
        [ "Fetch FC LLD module and then build SPDK with FC enabled", "nvmf.html#autotoc_md1301", null ]
      ] ],
      [ "Configuring the SPDK NVMe over Fabrics Target", "nvmf.html#nvmf_config", [
        [ "Using RPCs", "nvmf.html#nvmf_config_rpc", null ],
        [ "NQN Formal Definition", "nvmf.html#autotoc_md1304", [
          [ "NQN Comparisons", "nvmf.html#autotoc_md1308", null ]
        ] ],
        [ "Assigning CPU Cores to the NVMe over Fabrics Target", "nvmf.html#nvmf_config_lcore", null ]
      ] ],
      [ "Configuring the Linux NVMe over Fabrics Host", "nvmf.html#nvmf_host", null ],
      [ "Enabling NVMe-oF target tracepoints for offline analysis and debug", "nvmf.html#nvmf_trace", null ],
      [ "Enabling NVMe-oF Multipath", "nvmf.html#autotoc_md1317", null ],
      [ "Enabling NVMe-oF TLS", "nvmf.html#autotoc_md1319", [
        [ "Target setup", "nvmf.html#autotoc_md1340", null ],
        [ "Initiator setup", "nvmf.html#autotoc_md1341", null ]
      ] ],
      [ "NVMe-oF in-band authentication", "nvmf.html#autotoc_md1342", null ],
      [ "NVMe Subsystem Reset (NSSR)", "nvmf.html#autotoc_md1344", null ],
      [ "NVMe firmware update", "nvmf.html#autotoc_md1348", null ]
    ] ],
    [ "vhost Target", "vhost.html", [
      [ "Table of Contents", "vhost.html#vhost_toc", null ],
      [ "Introduction", "vhost.html#vhost_intro", null ],
      [ "Prerequisites", "vhost.html#vhost_prereqs", [
        [ "Vhost Command Line Parameters", "vhost.html#vhost_cmd_line_args", null ],
        [ "Supported Guest Operating Systems", "vhost.html#autotoc_md1438", null ],
        [ "QEMU", "vhost.html#autotoc_md1439", null ]
      ] ],
      [ "Starting SPDK vhost target", "vhost.html#vhost_start", null ],
      [ "SPDK Configuration", "vhost.html#vhost_config", [
        [ "Create bdev (block device)", "vhost.html#vhost_bdev_create", null ],
        [ "Create a vhost device", "vhost.html#vhost_vdev_create", [
          [ "Vhost-SCSI", "vhost.html#autotoc_md1440", null ],
          [ "Vhost-BLK", "vhost.html#autotoc_md1441", null ]
        ] ],
        [ "QEMU", "vhost.html#vhost_qemu_config", [
          [ "Vhost-SCSI", "vhost.html#autotoc_md1442", null ],
          [ "Vhost-BLK", "vhost.html#autotoc_md1443", null ]
        ] ],
        [ "Example output", "vhost.html#vhost_example", null ]
      ] ],
      [ "Advanced Topics", "vhost.html#vhost_advanced_topics", [
        [ "Multi-Queue Block Layer (blk-mq)", "vhost.html#vhost_multiqueue", null ],
        [ "Hot-attach/hot-detach", "vhost.html#vhost_hotattach", [
          [ "Hot-attach", "vhost.html#autotoc_md1444", null ],
          [ "Hot-detach", "vhost.html#autotoc_md1445", null ]
        ] ]
      ] ],
      [ "Known bugs and limitations", "vhost.html#vhost_bugs", [
        [ "Windows virtio-blk driver before version 0.1.130-1 only works with 512-byte sectors", "vhost.html#autotoc_md1446", null ],
        [ "QEMU vhost-user-blk", "vhost.html#autotoc_md1448", null ]
      ] ]
    ] ],
    [ "Block Device User Guide", "bdev.html", [
      [ "Target Audience", "bdev.html#bdev_ug_targetaudience", null ],
      [ "Introduction", "bdev.html#bdev_ug_introduction", null ],
      [ "Prerequisites", "bdev.html#bdev_ug_prerequisites", null ],
      [ "Configuring Block Device Modules", "bdev.html#bdev_ug_general_rpcs", null ],
      [ "Common Block Device Configuration Examples", "bdev.html#autotoc_md870", null ],
      [ "Ceph RBD", "bdev.html#bdev_config_rbd", null ],
      [ "Crypto Virtual Bdev Module", "bdev.html#bdev_config_crypto", [
        [ "dpdk_cryptodev accel module", "bdev.html#autotoc_md871", null ],
        [ "SW accel module", "bdev.html#autotoc_md872", null ],
        [ "General workflow", "bdev.html#autotoc_md873", [
          [ "Example", "bdev.html#autotoc_md874", null ]
        ] ],
        [ "Crypto key format", "bdev.html#autotoc_md875", [
          [ "Example command", "bdev.html#autotoc_md876", null ]
        ] ],
        [ "Delete the virtual crypto block device", "bdev.html#autotoc_md877", null ],
        [ "dpdk_cryptodev mlx5_pci driver configuration", "bdev.html#autotoc_md878", null ]
      ] ],
      [ "Delay Bdev Module", "bdev.html#bdev_config_delay", null ],
      [ "GPT (GUID Partition Table)", "bdev.html#bdev_config_gpt", [
        [ "SPDK GPT partition table", "bdev.html#bdev_ug_gpt", null ],
        [ "Creating a GPT partition table using NBD", "bdev.html#bdev_ug_gpt_create_part", null ]
      ] ],
      [ "iSCSI bdev", "bdev.html#bdev_config_iscsi", null ],
      [ "Linux AIO bdev", "bdev.html#bdev_config_aio", null ],
      [ "OCF Virtual bdev", "bdev.html#bdev_config_cas", null ],
      [ "Malloc bdev", "bdev.html#bdev_config_malloc", null ],
      [ "Null", "bdev.html#bdev_config_null", null ],
      [ "NVMe bdev", "bdev.html#bdev_config_nvme", [
        [ "NVMe bdev character device", "bdev.html#bdev_config_nvme_cuse", null ]
      ] ],
      [ "Logical volumes", "bdev.html#bdev_ug_logical_volumes", [
        [ "Logical volume store", "bdev.html#bdev_ug_lvol_store", null ],
        [ "Lvols", "bdev.html#bdev_ug_lvols", null ]
      ] ],
      [ "Passthru", "bdev.html#bdev_config_passthru", null ],
      [ "RAID", "bdev.html#bdev_ug_raid", null ],
      [ "Split", "bdev.html#bdev_ug_split", null ],
      [ "Uring", "bdev.html#bdev_ug_uring", null ],
      [ "xNVMe", "bdev.html#bdev_ug_xnvme", null ],
      [ "Virtio Block", "bdev.html#bdev_config_virtio_blk", null ],
      [ "Virtio SCSI", "bdev.html#bdev_config_virtio_scsi", null ],
      [ "DAOS bdev", "bdev.html#bdev_config_daos", null ]
    ] ],
    [ "JSON-RPC", "jsonrpc.html", [
      [ "Overview", "jsonrpc.html#jsonrpc_overview", null ],
      [ "Parameters", "jsonrpc.html#autotoc_md31", [
        [ "Required parameters", "jsonrpc.html#autotoc_md32", null ],
        [ "Optional parameters", "jsonrpc.html#autotoc_md33", null ]
      ] ],
      [ "Error response message", "jsonrpc.html#jsonrpc_error_message", [
        [ "Parser error", "jsonrpc.html#jsonrpc_parser_error", null ],
        [ "Invalid params", "jsonrpc.html#jsonrpc_invalid_params", null ]
      ] ],
      [ "rpc.py", "jsonrpc.html#rpc_py", [
        [ "Generate JSON-RPC methods for current configuration", "jsonrpc.html#jsonrpc_generate", null ],
        [ "JSON-RPC Remote access", "jsonrpc.html#autotoc_md34", null ],
        [ "JSON-RPC batching", "jsonrpc.html#autotoc_md35", null ],
        [ "Adding external RPC methods", "jsonrpc.html#autotoc_md36", null ],
        [ "Converting from legacy configuration", "jsonrpc.html#jsonrpc_convert", null ]
      ] ],
      [ "App Framework", "jsonrpc.html#jsonrpc_components_app", [
        [ "spdk_kill_instance", "jsonrpc.html#rpc_spdk_kill_instance", [
          [ "Parameters", "jsonrpc.html#autotoc_md37", null ],
          [ "Example", "jsonrpc.html#autotoc_md38", null ]
        ] ],
        [ "framework_monitor_context_switch", "jsonrpc.html#rpc_framework_monitor_context_switch", [
          [ "Parameters", "jsonrpc.html#autotoc_md39", null ],
          [ "Response", "jsonrpc.html#autotoc_md40", null ],
          [ "Example", "jsonrpc.html#autotoc_md41", null ]
        ] ],
        [ "framework_start_init", "jsonrpc.html#rpc_framework_start_init", [
          [ "Parameters", "jsonrpc.html#autotoc_md42", null ],
          [ "Response", "jsonrpc.html#autotoc_md43", null ],
          [ "Example", "jsonrpc.html#autotoc_md44", null ]
        ] ],
        [ "framework_wait_init", "jsonrpc.html#rpc_framework_wait_init", [
          [ "Parameters", "jsonrpc.html#autotoc_md45", null ],
          [ "Response", "jsonrpc.html#autotoc_md46", null ],
          [ "Example", "jsonrpc.html#autotoc_md47", null ]
        ] ],
        [ "rpc_get_methods", "jsonrpc.html#rpc_rpc_get_methods", [
          [ "Parameters", "jsonrpc.html#autotoc_md48", null ],
          [ "Response", "jsonrpc.html#autotoc_md49", null ],
          [ "Example", "jsonrpc.html#autotoc_md50", null ]
        ] ],
        [ "framework_get_subsystems", "jsonrpc.html#rpc_framework_get_subsystems", [
          [ "Parameters", "jsonrpc.html#autotoc_md51", null ],
          [ "Response", "jsonrpc.html#autotoc_md52", null ],
          [ "Example", "jsonrpc.html#autotoc_md53", null ]
        ] ],
        [ "framework_get_config", "jsonrpc.html#rpc_framework_get_config", [
          [ "Parameters", "jsonrpc.html#autotoc_md54", null ],
          [ "Response", "jsonrpc.html#autotoc_md55", null ],
          [ "Example", "jsonrpc.html#autotoc_md56", null ]
        ] ],
        [ "framework_get_reactors", "jsonrpc.html#rpc_framework_get_reactors", [
          [ "Parameters", "jsonrpc.html#autotoc_md57", null ],
          [ "Response", "jsonrpc.html#autotoc_md58", null ],
          [ "Example", "jsonrpc.html#autotoc_md59", null ]
        ] ],
        [ "framework_set_scheduler", "jsonrpc.html#rpc_framework_set_scheduler", [
          [ "Parameters", "jsonrpc.html#autotoc_md60", null ],
          [ "Response", "jsonrpc.html#autotoc_md61", null ],
          [ "Example", "jsonrpc.html#autotoc_md62", null ]
        ] ],
        [ "framework_get_scheduler", "jsonrpc.html#rpc_framework_get_scheduler", [
          [ "Parameters", "jsonrpc.html#autotoc_md63", null ],
          [ "Response", "jsonrpc.html#autotoc_md64", null ],
          [ "Example", "jsonrpc.html#autotoc_md65", null ]
        ] ],
        [ "framework_get_governor", "jsonrpc.html#rpc_framework_get_governor", [
          [ "Parameters", "jsonrpc.html#autotoc_md66", null ],
          [ "Response", "jsonrpc.html#autotoc_md67", null ],
          [ "Example", "jsonrpc.html#autotoc_md68", null ]
        ] ],
        [ "scheduler_set_options", "jsonrpc.html#rpc_scheduler_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md69", null ],
          [ "Example", "jsonrpc.html#autotoc_md70", null ]
        ] ],
        [ "framework_enable_cpumask_locks", "jsonrpc.html#rpc_framework_enable_cpumask_locks", [
          [ "Parameters", "jsonrpc.html#autotoc_md71", null ],
          [ "Response", "jsonrpc.html#autotoc_md72", null ],
          [ "Example", "jsonrpc.html#autotoc_md73", null ]
        ] ],
        [ "framework_disable_cpumask_locks", "jsonrpc.html#rpc_framework_disable_cpumask_locks", [
          [ "Parameters", "jsonrpc.html#autotoc_md74", null ],
          [ "Response", "jsonrpc.html#autotoc_md75", null ],
          [ "Example", "jsonrpc.html#autotoc_md76", null ]
        ] ],
        [ "thread_get_stats", "jsonrpc.html#rpc_thread_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md77", null ],
          [ "Response", "jsonrpc.html#autotoc_md78", null ],
          [ "Example", "jsonrpc.html#autotoc_md79", null ]
        ] ],
        [ "thread_set_cpumask", "jsonrpc.html#rpc_thread_set_cpumask", [
          [ "Parameters", "jsonrpc.html#autotoc_md80", null ],
          [ "Response", "jsonrpc.html#autotoc_md81", null ],
          [ "Example", "jsonrpc.html#autotoc_md82", null ]
        ] ],
        [ "trace_enable_tpoint_group", "jsonrpc.html#rpc_trace_enable_tpoint_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md83", null ],
          [ "Example", "jsonrpc.html#autotoc_md84", null ]
        ] ],
        [ "trace_disable_tpoint_group", "jsonrpc.html#rpc_trace_disable_tpoint_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md85", null ],
          [ "Example", "jsonrpc.html#autotoc_md86", null ]
        ] ],
        [ "trace_set_tpoint_mask", "jsonrpc.html#rpc_trace_set_tpoint_mask", [
          [ "Parameters", "jsonrpc.html#autotoc_md87", null ],
          [ "Example", "jsonrpc.html#autotoc_md88", null ]
        ] ],
        [ "trace_clear_tpoint_mask", "jsonrpc.html#rpc_trace_clear_tpoint_mask", [
          [ "Parameters", "jsonrpc.html#autotoc_md89", null ],
          [ "Example", "jsonrpc.html#autotoc_md90", null ]
        ] ],
        [ "trace_get_tpoint_group_mask", "jsonrpc.html#rpc_trace_get_tpoint_group_mask", [
          [ "Parameters", "jsonrpc.html#autotoc_md91", null ],
          [ "Example", "jsonrpc.html#autotoc_md92", null ]
        ] ],
        [ "trace_clear", "jsonrpc.html#rpc_trace_clear", [
          [ "Parameters", "jsonrpc.html#autotoc_md93", null ],
          [ "Example", "jsonrpc.html#autotoc_md94", null ]
        ] ],
        [ "trace_get_info", "jsonrpc.html#rpc_trace_get_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md95", null ],
          [ "Example", "jsonrpc.html#autotoc_md96", null ]
        ] ],
        [ "log_set_print_level", "jsonrpc.html#rpc_log_set_print_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md97", null ],
          [ "Example", "jsonrpc.html#autotoc_md98", null ]
        ] ],
        [ "log_get_print_level", "jsonrpc.html#rpc_log_get_print_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md99", null ],
          [ "Example", "jsonrpc.html#autotoc_md100", null ]
        ] ],
        [ "log_set_level", "jsonrpc.html#rpc_log_set_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md101", null ],
          [ "Example", "jsonrpc.html#autotoc_md102", null ]
        ] ],
        [ "log_get_level", "jsonrpc.html#rpc_log_get_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md103", null ],
          [ "Example", "jsonrpc.html#autotoc_md104", null ]
        ] ],
        [ "log_set_flag", "jsonrpc.html#rpc_log_set_flag", [
          [ "Parameters", "jsonrpc.html#autotoc_md105", null ],
          [ "Example", "jsonrpc.html#autotoc_md106", null ]
        ] ],
        [ "log_clear_flag", "jsonrpc.html#rpc_log_clear_flag", [
          [ "Parameters", "jsonrpc.html#autotoc_md107", null ],
          [ "Example", "jsonrpc.html#autotoc_md108", null ]
        ] ],
        [ "log_get_flags", "jsonrpc.html#rpc_log_get_flags", [
          [ "Parameters", "jsonrpc.html#autotoc_md109", null ],
          [ "Example", "jsonrpc.html#autotoc_md110", null ]
        ] ],
        [ "log_enable_timestamps", "jsonrpc.html#rpc_log_enable_timestamps", [
          [ "Parameters", "jsonrpc.html#autotoc_md111", null ],
          [ "Example", "jsonrpc.html#autotoc_md112", null ]
        ] ],
        [ "thread_get_pollers", "jsonrpc.html#rpc_thread_get_pollers", [
          [ "Parameters", "jsonrpc.html#autotoc_md113", null ],
          [ "Response", "jsonrpc.html#autotoc_md114", null ],
          [ "Example", "jsonrpc.html#autotoc_md115", null ]
        ] ],
        [ "thread_get_io_channels", "jsonrpc.html#rpc_thread_get_io_channels", [
          [ "Parameters", "jsonrpc.html#autotoc_md116", null ],
          [ "Response", "jsonrpc.html#autotoc_md117", null ],
          [ "Example", "jsonrpc.html#autotoc_md118", null ]
        ] ],
        [ "env_dpdk_get_mem_stats", "jsonrpc.html#rpc_env_dpdk_get_mem_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md119", null ],
          [ "Response", "jsonrpc.html#autotoc_md120", null ],
          [ "Example", "jsonrpc.html#autotoc_md121", null ]
        ] ]
      ] ],
      [ "Acceleration Framework Layer", "jsonrpc.html#jsonrpc_components_accel_fw", [
        [ "accel_get_module_info", "jsonrpc.html#rpc_accel_get_module_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md122", null ],
          [ "Example", "jsonrpc.html#autotoc_md123", null ]
        ] ],
        [ "accel_get_opc_assignments", "jsonrpc.html#rpc_accel_get_opc_assignments", [
          [ "Parameters", "jsonrpc.html#autotoc_md124", null ],
          [ "Example", "jsonrpc.html#autotoc_md125", null ]
        ] ],
        [ "accel_assign_opc", "jsonrpc.html#rpc_accel_assign_opc", [
          [ "Parameters", "jsonrpc.html#autotoc_md126", null ],
          [ "Example", "jsonrpc.html#autotoc_md127", null ]
        ] ],
        [ "accel_crypto_key_create", "jsonrpc.html#rpc_accel_crypto_key_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md128", null ],
          [ "Example", "jsonrpc.html#autotoc_md129", null ]
        ] ],
        [ "accel_crypto_key_destroy", "jsonrpc.html#rpc_accel_crypto_key_destroy", [
          [ "Parameters", "jsonrpc.html#autotoc_md130", null ],
          [ "Example", "jsonrpc.html#autotoc_md131", null ]
        ] ],
        [ "accel_crypto_keys_get", "jsonrpc.html#rpc_accel_crypto_keys_get", [
          [ "Parameters", "jsonrpc.html#autotoc_md132", null ],
          [ "Example", "jsonrpc.html#autotoc_md133", null ]
        ] ],
        [ "accel_set_driver", "jsonrpc.html#rpc_accel_set_driver", [
          [ "Parameters", "jsonrpc.html#autotoc_md134", null ],
          [ "Example", "jsonrpc.html#autotoc_md135", null ]
        ] ],
        [ "accel_set_options", "jsonrpc.html#rpc_accel_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md136", null ],
          [ "Example", "jsonrpc.html#autotoc_md137", null ]
        ] ],
        [ "accel_get_stats", "jsonrpc.html#rpc_accel_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md138", null ],
          [ "Example", "jsonrpc.html#autotoc_md139", null ]
        ] ],
        [ "accel_error_inject_error", "jsonrpc.html#rpc_accel_error_inject_error", [
          [ "Parameters", "jsonrpc.html#autotoc_md140", null ],
          [ "Example", "jsonrpc.html#autotoc_md141", null ]
        ] ],
        [ "compressdev_scan_accel_module", "jsonrpc.html#rpc_compressdev_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md142", null ],
          [ "Example", "jsonrpc.html#autotoc_md143", null ]
        ] ],
        [ "dsa_scan_accel_module", "jsonrpc.html#rpc_dsa_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md144", null ],
          [ "Example", "jsonrpc.html#autotoc_md145", null ]
        ] ],
        [ "iaa_scan_accel_module", "jsonrpc.html#rpc_iaa_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md146", null ],
          [ "Example", "jsonrpc.html#autotoc_md147", null ]
        ] ],
        [ "ioat_scan_accel_module", "jsonrpc.html#rpc_ioat_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md148", null ],
          [ "Example", "jsonrpc.html#autotoc_md149", null ]
        ] ],
        [ "ae4dma_scan_accel_module", "jsonrpc.html#rpc_ae4dma_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md150", null ],
          [ "Example", "jsonrpc.html#autotoc_md151", null ]
        ] ],
        [ "cuda_scan_accel_module", "jsonrpc.html#rpc_cuda_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md152", null ],
          [ "Example", "jsonrpc.html#autotoc_md153", null ]
        ] ],
        [ "dpdk_cryptodev_scan_accel_module", "jsonrpc.html#rpc_dpdk_cryptodev_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md154", null ],
          [ "Example", "jsonrpc.html#autotoc_md155", null ]
        ] ],
        [ "dpdk_cryptodev_set_driver", "jsonrpc.html#rpc_dpdk_cryptodev_set_driver", [
          [ "Parameters", "jsonrpc.html#autotoc_md156", null ],
          [ "Example", "jsonrpc.html#autotoc_md157", null ]
        ] ],
        [ "dpdk_cryptodev_get_driver", "jsonrpc.html#rpc_dpdk_cryptodev_get_driver", [
          [ "Parameters", "jsonrpc.html#autotoc_md158", null ],
          [ "Example", "jsonrpc.html#autotoc_md159", null ]
        ] ],
        [ "mlx5_scan_accel_module", "jsonrpc.html#rpc_mlx5_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md160", null ],
          [ "Example", "jsonrpc.html#autotoc_md161", null ]
        ] ],
        [ "accel_mlx5_dump_stats", "jsonrpc.html#rpc_accel_mlx5_dump_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md162", null ],
          [ "Example", "jsonrpc.html#autotoc_md163", null ]
        ] ]
      ] ],
      [ "Block Device Abstraction Layer", "jsonrpc.html#jsonrpc_components_bdev", [
        [ "bdev_set_options", "jsonrpc.html#rpc_bdev_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md164", null ],
          [ "Example", "jsonrpc.html#autotoc_md165", null ]
        ] ],
        [ "bdev_get_bdevs", "jsonrpc.html#rpc_bdev_get_bdevs", [
          [ "Parameters", "jsonrpc.html#autotoc_md166", null ],
          [ "Response", "jsonrpc.html#autotoc_md167", null ],
          [ "Example", "jsonrpc.html#autotoc_md168", null ]
        ] ],
        [ "bdev_examine", "jsonrpc.html#rpc_bdev_examine", [
          [ "Parameters", "jsonrpc.html#autotoc_md169", null ],
          [ "Response", "jsonrpc.html#autotoc_md170", null ],
          [ "Example", "jsonrpc.html#autotoc_md171", null ]
        ] ],
        [ "bdev_wait_for_examine", "jsonrpc.html#rpc_bdev_wait_for_examine", [
          [ "Parameters", "jsonrpc.html#autotoc_md172", null ],
          [ "Response", "jsonrpc.html#autotoc_md173", null ],
          [ "Example", "jsonrpc.html#autotoc_md174", null ]
        ] ],
        [ "bdev_get_iostat", "jsonrpc.html#rpc_bdev_get_iostat", [
          [ "Parameters", "jsonrpc.html#autotoc_md175", null ],
          [ "Response", "jsonrpc.html#autotoc_md176", null ],
          [ "Example", "jsonrpc.html#autotoc_md177", null ]
        ] ],
        [ "bdev_reset_iostat", "jsonrpc.html#rpc_bdev_reset_iostat", [
          [ "Parameters", "jsonrpc.html#autotoc_md178", null ],
          [ "Example", "jsonrpc.html#autotoc_md179", null ]
        ] ],
        [ "bdev_enable_histogram", "jsonrpc.html#rpc_bdev_enable_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md180", null ],
          [ "Example", "jsonrpc.html#autotoc_md181", null ]
        ] ],
        [ "bdev_get_histogram", "jsonrpc.html#rpc_bdev_get_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md182", null ],
          [ "Response", "jsonrpc.html#autotoc_md183", null ],
          [ "Example", "jsonrpc.html#autotoc_md184", null ]
        ] ],
        [ "bdev_get_histogram_borders", "jsonrpc.html#rpc_bdev_get_histogram_borders", [
          [ "Parameters", "jsonrpc.html#autotoc_md185", null ],
          [ "Response", "jsonrpc.html#autotoc_md186", null ],
          [ "Example", "jsonrpc.html#autotoc_md187", null ]
        ] ],
        [ "bdev_set_qos_limit", "jsonrpc.html#rpc_bdev_set_qos_limit", [
          [ "Parameters", "jsonrpc.html#autotoc_md188", null ],
          [ "Example", "jsonrpc.html#autotoc_md189", null ]
        ] ],
        [ "bdev_set_qd_sampling_period", "jsonrpc.html#rpc_bdev_set_qd_sampling_period", [
          [ "Parameters", "jsonrpc.html#autotoc_md190", null ],
          [ "Example", "jsonrpc.html#autotoc_md191", null ]
        ] ],
        [ "bdev_crypto_create", "jsonrpc.html#rpc_bdev_crypto_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md192", null ],
          [ "Response", "jsonrpc.html#autotoc_md193", null ],
          [ "Example", "jsonrpc.html#autotoc_md194", null ]
        ] ],
        [ "bdev_crypto_delete", "jsonrpc.html#rpc_bdev_crypto_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md195", null ],
          [ "Example", "jsonrpc.html#autotoc_md196", null ]
        ] ],
        [ "bdev_ocf_create", "jsonrpc.html#rpc_bdev_ocf_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md197", null ],
          [ "Response", "jsonrpc.html#autotoc_md198", null ],
          [ "Example", "jsonrpc.html#autotoc_md199", null ]
        ] ],
        [ "bdev_ocf_delete", "jsonrpc.html#rpc_bdev_ocf_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md200", null ],
          [ "Example", "jsonrpc.html#autotoc_md201", null ]
        ] ],
        [ "bdev_ocf_get_stats", "jsonrpc.html#rpc_bdev_ocf_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md202", null ],
          [ "Response", "jsonrpc.html#autotoc_md203", null ],
          [ "Example", "jsonrpc.html#autotoc_md204", null ]
        ] ],
        [ "bdev_ocf_reset_stats", "jsonrpc.html#rpc_bdev_ocf_reset_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md205", null ],
          [ "Response", "jsonrpc.html#autotoc_md206", null ],
          [ "Example", "jsonrpc.html#autotoc_md207", null ]
        ] ],
        [ "bdev_ocf_get_bdevs", "jsonrpc.html#rpc_bdev_ocf_get_bdevs", [
          [ "Parameters", "jsonrpc.html#autotoc_md208", null ],
          [ "Response", "jsonrpc.html#autotoc_md209", null ],
          [ "Example", "jsonrpc.html#autotoc_md210", null ]
        ] ],
        [ "bdev_ocf_set_cache_mode", "jsonrpc.html#rpc_bdev_ocf_set_cache_mode", [
          [ "Parameters", "jsonrpc.html#autotoc_md211", null ],
          [ "Response", "jsonrpc.html#autotoc_md212", null ],
          [ "Example", "jsonrpc.html#autotoc_md213", null ]
        ] ],
        [ "bdev_ocf_set_seqcutoff", "jsonrpc.html#rpc_bdev_ocf_set_seqcutoff", [
          [ "Parameters", "jsonrpc.html#autotoc_md214", null ],
          [ "Example", "jsonrpc.html#autotoc_md215", null ]
        ] ],
        [ "bdev_ocf_flush_start", "jsonrpc.html#rpc_bdev_ocf_flush_start", [
          [ "Parameters", "jsonrpc.html#autotoc_md216", null ],
          [ "Example", "jsonrpc.html#autotoc_md217", null ]
        ] ],
        [ "bdev_ocf_flush_status", "jsonrpc.html#rpc_bdev_ocf_flush_status", [
          [ "Parameters", "jsonrpc.html#autotoc_md218", null ],
          [ "Response", "jsonrpc.html#autotoc_md219", null ],
          [ "Example", "jsonrpc.html#autotoc_md220", null ]
        ] ],
        [ "bdev_malloc_create", "jsonrpc.html#rpc_bdev_malloc_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md221", null ],
          [ "Response", "jsonrpc.html#autotoc_md222", null ],
          [ "Example", "jsonrpc.html#autotoc_md223", null ]
        ] ],
        [ "bdev_malloc_delete", "jsonrpc.html#rpc_bdev_malloc_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md224", null ],
          [ "Example", "jsonrpc.html#autotoc_md225", null ]
        ] ],
        [ "bdev_null_create", "jsonrpc.html#rpc_bdev_null_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md226", null ],
          [ "Response", "jsonrpc.html#autotoc_md227", null ],
          [ "Example", "jsonrpc.html#autotoc_md228", null ]
        ] ],
        [ "bdev_null_delete", "jsonrpc.html#rpc_bdev_null_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md229", null ],
          [ "Example", "jsonrpc.html#autotoc_md230", null ]
        ] ],
        [ "bdev_null_resize", "jsonrpc.html#rpc_bdev_null_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md231", null ],
          [ "Example", "jsonrpc.html#autotoc_md232", null ]
        ] ],
        [ "bdev_aio_create", "jsonrpc.html#rpc_bdev_aio_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md233", null ],
          [ "Response", "jsonrpc.html#autotoc_md234", null ],
          [ "Example", "jsonrpc.html#autotoc_md235", null ]
        ] ],
        [ "bdev_aio_rescan", "jsonrpc.html#rpc_bdev_aio_rescan", [
          [ "Parameters", "jsonrpc.html#autotoc_md236", null ],
          [ "Example", "jsonrpc.html#autotoc_md237", null ]
        ] ],
        [ "bdev_aio_delete", "jsonrpc.html#rpc_bdev_aio_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md238", null ],
          [ "Example", "jsonrpc.html#autotoc_md239", null ]
        ] ],
        [ "bdev_nvme_set_options", "jsonrpc.html#rpc_bdev_nvme_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md240", null ],
          [ "Example", "jsonrpc.html#autotoc_md241", null ]
        ] ],
        [ "bdev_nvme_set_hotplug", "jsonrpc.html#rpc_bdev_nvme_set_hotplug", [
          [ "Parameters", "jsonrpc.html#autotoc_md242", null ],
          [ "Example", "jsonrpc.html#autotoc_md243", null ]
        ] ],
        [ "bdev_nvme_attach_controller", "jsonrpc.html#rpc_bdev_nvme_attach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md244", null ],
          [ "Response", "jsonrpc.html#autotoc_md245", null ],
          [ "Example", "jsonrpc.html#autotoc_md246", null ]
        ] ],
        [ "bdev_nvme_get_controllers", "jsonrpc.html#rpc_bdev_nvme_get_controllers", [
          [ "Parameters", "jsonrpc.html#autotoc_md247", null ],
          [ "Response", "jsonrpc.html#autotoc_md248", null ],
          [ "Example", "jsonrpc.html#autotoc_md249", null ]
        ] ],
        [ "bdev_nvme_detach_controller", "jsonrpc.html#rpc_bdev_nvme_detach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md250", null ],
          [ "Example", "jsonrpc.html#autotoc_md251", null ]
        ] ],
        [ "bdev_nvme_reset_controller", "jsonrpc.html#rpc_bdev_nvme_reset_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md252", null ],
          [ "Example", "jsonrpc.html#autotoc_md253", null ]
        ] ],
        [ "bdev_nvme_enable_controller", "jsonrpc.html#rpc_bdev_nvme_enable_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md254", null ],
          [ "Example", "jsonrpc.html#autotoc_md255", null ]
        ] ],
        [ "bdev_nvme_disable_controller", "jsonrpc.html#rpc_bdev_nvme_disable_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md256", null ],
          [ "Example", "jsonrpc.html#autotoc_md257", null ]
        ] ],
        [ "bdev_nvme_start_discovery", "jsonrpc.html#rpc_bdev_nvme_start_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md258", null ],
          [ "Example", "jsonrpc.html#autotoc_md259", null ]
        ] ],
        [ "bdev_nvme_stop_discovery", "jsonrpc.html#rpc_bdev_nvme_stop_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md260", null ],
          [ "Example", "jsonrpc.html#autotoc_md261", null ]
        ] ],
        [ "bdev_nvme_get_discovery_info", "jsonrpc.html#rpc_bdev_nvme_get_discovery_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md262", null ],
          [ "Example", "jsonrpc.html#autotoc_md263", null ]
        ] ],
        [ "bdev_nvme_get_io_paths", "jsonrpc.html#rpc_bdev_nvme_get_io_paths", [
          [ "Parameters", "jsonrpc.html#autotoc_md264", null ],
          [ "Example", "jsonrpc.html#autotoc_md265", null ]
        ] ],
        [ "bdev_nvme_set_preferred_path", "jsonrpc.html#rpc_bdev_nvme_set_preferred_path", [
          [ "Parameters", "jsonrpc.html#autotoc_md266", null ],
          [ "Example", "jsonrpc.html#autotoc_md267", null ]
        ] ],
        [ "bdev_nvme_set_multipath_policy", "jsonrpc.html#rpc_bdev_nvme_set_multipath_policy", [
          [ "Parameters", "jsonrpc.html#autotoc_md268", null ],
          [ "Example", "jsonrpc.html#autotoc_md269", null ]
        ] ],
        [ "bdev_nvme_get_path_iostat", "jsonrpc.html#rpc_bdev_nvme_get_path_iostat", [
          [ "Parameters", "jsonrpc.html#autotoc_md270", null ],
          [ "Example", "jsonrpc.html#autotoc_md271", null ]
        ] ],
        [ "bdev_nvme_cuse_register", "jsonrpc.html#rpc_bdev_nvme_cuse_register", [
          [ "Parameters", "jsonrpc.html#autotoc_md272", null ],
          [ "Example", "jsonrpc.html#autotoc_md273", null ]
        ] ],
        [ "bdev_nvme_cuse_unregister", "jsonrpc.html#rpc_bdev_nvme_cuse_unregister", [
          [ "Parameters", "jsonrpc.html#autotoc_md274", null ],
          [ "Example", "jsonrpc.html#autotoc_md275", null ]
        ] ],
        [ "bdev_nvme_set_keys", "jsonrpc.html#rpc_bdev_nvme_set_keys", [
          [ "Parameters", "jsonrpc.html#autotoc_md276", null ],
          [ "Example", "jsonrpc.html#autotoc_md277", null ]
        ] ],
        [ "bdev_zone_block_create", "jsonrpc.html#rpc_bdev_zone_block_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md278", null ],
          [ "Example", "jsonrpc.html#autotoc_md279", null ]
        ] ],
        [ "bdev_zone_block_delete", "jsonrpc.html#rpc_bdev_zone_block_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md280", null ],
          [ "Example", "jsonrpc.html#autotoc_md281", null ]
        ] ],
        [ "bdev_nvme_apply_firmware", "jsonrpc.html#rpc_bdev_nvme_apply_firmware", [
          [ "Parameters", "jsonrpc.html#autotoc_md282", null ],
          [ "Example", "jsonrpc.html#autotoc_md283", null ]
        ] ],
        [ "bdev_nvme_get_transport_statistics", "jsonrpc.html#rpc_bdev_nvme_get_transport_statistics", [
          [ "Parameters", "jsonrpc.html#autotoc_md284", null ],
          [ "Response", "jsonrpc.html#autotoc_md285", null ],
          [ "Example", "jsonrpc.html#autotoc_md286", null ]
        ] ],
        [ "bdev_nvme_get_controller_health_info", "jsonrpc.html#rpc_bdev_nvme_get_controller_health_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md287", null ],
          [ "Response", "jsonrpc.html#autotoc_md288", null ],
          [ "Example", "jsonrpc.html#autotoc_md289", null ]
        ] ],
        [ "bdev_rbd_register_cluster", "jsonrpc.html#rpc_bdev_rbd_register_cluster", [
          [ "Parameters", "jsonrpc.html#autotoc_md290", null ],
          [ "Response", "jsonrpc.html#autotoc_md291", null ],
          [ "Example", "jsonrpc.html#autotoc_md292", null ]
        ] ],
        [ "bdev_rbd_unregister_cluster", "jsonrpc.html#rpc_bdev_rbd_unregister_cluster", [
          [ "Parameters", "jsonrpc.html#autotoc_md293", null ],
          [ "Response", "jsonrpc.html#autotoc_md294", null ],
          [ "Example", "jsonrpc.html#autotoc_md295", null ]
        ] ],
        [ "bdev_rbd_get_clusters_info", "jsonrpc.html#rpc_bdev_rbd_get_clusters_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md296", null ],
          [ "Response", "jsonrpc.html#autotoc_md297", null ],
          [ "Example", "jsonrpc.html#autotoc_md298", null ]
        ] ],
        [ "bdev_rbd_create", "jsonrpc.html#rpc_bdev_rbd_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md299", null ],
          [ "Response", "jsonrpc.html#autotoc_md300", null ],
          [ "Example", "jsonrpc.html#autotoc_md301", null ]
        ] ],
        [ "bdev_rbd_delete", "jsonrpc.html#rpc_bdev_rbd_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md302", null ],
          [ "Response", "jsonrpc.html#autotoc_md303", null ],
          [ "Example", "jsonrpc.html#autotoc_md304", null ]
        ] ],
        [ "bdev_rbd_resize", "jsonrpc.html#rpc_bdev_rbd_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md305", null ],
          [ "Response", "jsonrpc.html#autotoc_md306", null ],
          [ "Example", "jsonrpc.html#autotoc_md307", null ]
        ] ],
        [ "bdev_delay_create", "jsonrpc.html#rpc_bdev_delay_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md308", null ],
          [ "Response", "jsonrpc.html#autotoc_md309", null ],
          [ "Example", "jsonrpc.html#autotoc_md310", null ]
        ] ],
        [ "bdev_delay_delete", "jsonrpc.html#rpc_bdev_delay_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md311", null ],
          [ "Example", "jsonrpc.html#autotoc_md312", null ]
        ] ],
        [ "bdev_delay_update_latency", "jsonrpc.html#rpc_bdev_delay_update_latency", [
          [ "Parameters", "jsonrpc.html#autotoc_md313", null ],
          [ "Response", "jsonrpc.html#autotoc_md314", null ],
          [ "Example", "jsonrpc.html#autotoc_md315", null ]
        ] ],
        [ "bdev_error_create", "jsonrpc.html#rpc_bdev_error_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md316", null ],
          [ "Example", "jsonrpc.html#autotoc_md317", null ]
        ] ],
        [ "bdev_error_delete", "jsonrpc.html#rpc_bdev_error_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md318", null ],
          [ "Response", "jsonrpc.html#autotoc_md319", null ],
          [ "Example", "jsonrpc.html#autotoc_md320", null ]
        ] ],
        [ "bdev_error_inject_error", "jsonrpc.html#rpc_bdev_error_inject_error", [
          [ "Parameters", "jsonrpc.html#autotoc_md321", null ],
          [ "Example", "jsonrpc.html#autotoc_md322", null ]
        ] ],
        [ "bdev_iscsi_set_options", "jsonrpc.html#rpc_bdev_iscsi_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md323", null ],
          [ "Example", "jsonrpc.html#autotoc_md324", null ]
        ] ],
        [ "bdev_iscsi_create", "jsonrpc.html#rpc_bdev_iscsi_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md325", null ],
          [ "Response", "jsonrpc.html#autotoc_md326", null ],
          [ "Example", "jsonrpc.html#autotoc_md327", null ]
        ] ],
        [ "bdev_iscsi_delete", "jsonrpc.html#rpc_bdev_iscsi_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md328", null ],
          [ "Example", "jsonrpc.html#autotoc_md329", null ]
        ] ],
        [ "bdev_ftl_create", "jsonrpc.html#rpc_bdev_ftl_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md330", null ],
          [ "Response", "jsonrpc.html#autotoc_md331", null ],
          [ "Example", "jsonrpc.html#autotoc_md332", null ]
        ] ],
        [ "bdev_ftl_delete", "jsonrpc.html#rpc_bdev_ftl_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md333", null ],
          [ "Example", "jsonrpc.html#autotoc_md334", null ]
        ] ],
        [ "bdev_ftl_unmap", "jsonrpc.html#rpc_bdev_ftl_unmap", [
          [ "Parameters", "jsonrpc.html#autotoc_md335", null ],
          [ "Example", "jsonrpc.html#autotoc_md336", null ]
        ] ],
        [ "bdev_ftl_get_stats", "jsonrpc.html#rpc_bdev_ftl_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md337", null ],
          [ "Response", "jsonrpc.html#autotoc_md338", null ],
          [ "Example", "jsonrpc.html#autotoc_md339", null ]
        ] ],
        [ "bdev_ftl_get_properties", "jsonrpc.html#rpc_bdev_ftl_get_properties", [
          [ "Parameters", "jsonrpc.html#autotoc_md340", null ],
          [ "Response", "jsonrpc.html#autotoc_md341", null ],
          [ "Example", "jsonrpc.html#autotoc_md342", null ]
        ] ],
        [ "bdev_ftl_set_property", "jsonrpc.html#rpc_bdev_ftl_set_property", [
          [ "Parameters", "jsonrpc.html#autotoc_md343", null ],
          [ "Example", "jsonrpc.html#autotoc_md344", null ]
        ] ],
        [ "bdev_passthru_create", "jsonrpc.html#rpc_bdev_passthru_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md345", null ],
          [ "Response", "jsonrpc.html#autotoc_md346", null ],
          [ "Example", "jsonrpc.html#autotoc_md347", null ]
        ] ],
        [ "bdev_passthru_delete", "jsonrpc.html#rpc_bdev_passthru_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md348", null ],
          [ "Example", "jsonrpc.html#autotoc_md349", null ]
        ] ],
        [ "bdev_xnvme_create", "jsonrpc.html#rpc_bdev_xnvme_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md350", null ],
          [ "Response", "jsonrpc.html#autotoc_md351", null ],
          [ "Example", "jsonrpc.html#autotoc_md352", null ]
        ] ],
        [ "bdev_xnvme_delete", "jsonrpc.html#rpc_bdev_xnvme_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md353", null ],
          [ "Example", "jsonrpc.html#autotoc_md354", null ]
        ] ],
        [ "bdev_virtio_attach_controller", "jsonrpc.html#rpc_bdev_virtio_attach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md355", null ],
          [ "Response", "jsonrpc.html#autotoc_md356", null ],
          [ "Example", "jsonrpc.html#autotoc_md357", null ]
        ] ],
        [ "bdev_virtio_scsi_get_devices", "jsonrpc.html#rpc_bdev_virtio_scsi_get_devices", [
          [ "Parameters", "jsonrpc.html#autotoc_md358", null ],
          [ "Response", "jsonrpc.html#autotoc_md359", null ],
          [ "Example", "jsonrpc.html#autotoc_md360", null ]
        ] ],
        [ "bdev_virtio_detach_controller", "jsonrpc.html#rpc_bdev_virtio_detach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md361", null ],
          [ "Example", "jsonrpc.html#autotoc_md362", null ]
        ] ],
        [ "bdev_virtio_blk_set_hotplug", "jsonrpc.html#rpc_bdev_virtio_blk_set_hotplug", [
          [ "Parameters", "jsonrpc.html#autotoc_md363", null ],
          [ "Response", "jsonrpc.html#autotoc_md364", null ],
          [ "Example", "jsonrpc.html#autotoc_md365", null ]
        ] ]
      ] ],
      [ "iSCSI Target", "jsonrpc.html#jsonrpc_components_iscsi_tgt", [
        [ "iscsi_set_options", "jsonrpc.html#rpc_iscsi_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md366", null ],
          [ "Example", "jsonrpc.html#autotoc_md367", null ]
        ] ],
        [ "iscsi_get_options", "jsonrpc.html#rpc_iscsi_get_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md368", null ],
          [ "Example", "jsonrpc.html#autotoc_md369", null ]
        ] ],
        [ "scsi_get_devices", "jsonrpc.html#rpc_scsi_get_devices", [
          [ "Parameters", "jsonrpc.html#autotoc_md370", null ],
          [ "Example", "jsonrpc.html#autotoc_md371", null ]
        ] ],
        [ "iscsi_set_discovery_auth", "jsonrpc.html#rpc_iscsi_set_discovery_auth", [
          [ "Parameters", "jsonrpc.html#autotoc_md372", null ],
          [ "Example", "jsonrpc.html#autotoc_md373", null ]
        ] ],
        [ "iscsi_create_auth_group", "jsonrpc.html#rpc_iscsi_create_auth_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md374", [
            [ "secret", "jsonrpc.html#rpc_iscsi_create_auth_group_secret", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md375", null ]
        ] ],
        [ "iscsi_delete_auth_group", "jsonrpc.html#rpc_iscsi_delete_auth_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md376", null ],
          [ "Example", "jsonrpc.html#autotoc_md377", null ]
        ] ],
        [ "iscsi_get_auth_groups", "jsonrpc.html#rpc_iscsi_get_auth_groups", [
          [ "Parameters", "jsonrpc.html#autotoc_md378", null ],
          [ "Response", "jsonrpc.html#autotoc_md379", null ],
          [ "Example", "jsonrpc.html#autotoc_md380", null ]
        ] ],
        [ "iscsi_auth_group_add_secret", "jsonrpc.html#rpc_iscsi_auth_group_add_secret", [
          [ "Parameters", "jsonrpc.html#autotoc_md381", null ],
          [ "Example", "jsonrpc.html#autotoc_md382", null ]
        ] ],
        [ "iscsi_auth_group_remove_secret", "jsonrpc.html#rpc_iscsi_auth_group_remove_secret", [
          [ "Parameters", "jsonrpc.html#autotoc_md383", null ],
          [ "Example", "jsonrpc.html#autotoc_md384", null ]
        ] ],
        [ "iscsi_get_initiator_groups", "jsonrpc.html#rpc_iscsi_get_initiator_groups", [
          [ "Parameters", "jsonrpc.html#autotoc_md385", null ],
          [ "Response", "jsonrpc.html#autotoc_md386", null ],
          [ "Example", "jsonrpc.html#autotoc_md387", null ]
        ] ],
        [ "iscsi_create_initiator_group", "jsonrpc.html#rpc_iscsi_create_initiator_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md388", null ],
          [ "Example", "jsonrpc.html#autotoc_md389", null ]
        ] ],
        [ "iscsi_delete_initiator_group", "jsonrpc.html#rpc_iscsi_delete_initiator_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md390", null ],
          [ "Example", "jsonrpc.html#autotoc_md391", null ]
        ] ],
        [ "iscsi_initiator_group_add_initiators", "jsonrpc.html#rpc_iscsi_initiator_group_add_initiators", [
          [ "Parameters", "jsonrpc.html#autotoc_md392", null ],
          [ "Example", "jsonrpc.html#autotoc_md393", null ]
        ] ],
        [ "iscsi_initiator_group_remove_initiators", "jsonrpc.html#rpc_iscsi_initiator_group_remove_initiators", [
          [ "Parameters", "jsonrpc.html#autotoc_md394", null ],
          [ "Example", "jsonrpc.html#autotoc_md395", null ]
        ] ],
        [ "iscsi_get_target_nodes", "jsonrpc.html#rpc_iscsi_get_target_nodes", [
          [ "Parameters", "jsonrpc.html#autotoc_md396", null ],
          [ "Response", "jsonrpc.html#autotoc_md397", null ],
          [ "Example", "jsonrpc.html#autotoc_md398", null ]
        ] ],
        [ "iscsi_create_target_node", "jsonrpc.html#rpc_iscsi_create_target_node", [
          [ "Parameters", "jsonrpc.html#autotoc_md399", null ],
          [ "Example", "jsonrpc.html#autotoc_md400", null ]
        ] ],
        [ "iscsi_target_node_set_auth", "jsonrpc.html#rpc_iscsi_target_node_set_auth", [
          [ "Parameters", "jsonrpc.html#autotoc_md401", null ],
          [ "Example", "jsonrpc.html#autotoc_md403", null ]
        ] ],
        [ "iscsi_target_node_add_pg_ig_maps", "jsonrpc.html#rpc_iscsi_target_node_add_pg_ig_maps", [
          [ "Parameters", "jsonrpc.html#autotoc_md404", [
            [ "Portal to Initiator group mappings object", "jsonrpc.html#autotoc_md405", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md408", null ]
        ] ],
        [ "iscsi_target_node_remove_pg_ig_maps", "jsonrpc.html#rpc_iscsi_target_node_remove_pg_ig_maps", [
          [ "Parameters", "jsonrpc.html#autotoc_md410", [
            [ "Portal to Initiator group mappings object", "jsonrpc.html#autotoc_md411", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md412", null ]
        ] ],
        [ "iscsi_delete_target_node", "jsonrpc.html#rpc_iscsi_delete_target_node", [
          [ "Parameters", "jsonrpc.html#autotoc_md413", null ],
          [ "Example", "jsonrpc.html#autotoc_md414", null ]
        ] ],
        [ "iscsi_get_portal_groups", "jsonrpc.html#rpc_iscsi_get_portal_groups", [
          [ "Parameters", "jsonrpc.html#autotoc_md415", null ],
          [ "Example", "jsonrpc.html#autotoc_md416", null ]
        ] ],
        [ "iscsi_create_portal_group", "jsonrpc.html#rpc_iscsi_create_portal_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md417", [
            [ "Portal object", "jsonrpc.html#autotoc_md419", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md421", null ]
        ] ],
        [ "iscsi_start_portal_group", "jsonrpc.html#rpc_iscsi_start_portal_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md423", null ],
          [ "Example", "jsonrpc.html#autotoc_md425", null ]
        ] ],
        [ "iscsi_delete_portal_group", "jsonrpc.html#rpc_iscsi_delete_portal_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md442", null ],
          [ "Example", "jsonrpc.html#autotoc_md446", null ]
        ] ],
        [ "iscsi_portal_group_set_auth", "jsonrpc.html#rpc_iscsi_portal_group_set_auth", [
          [ "Parameters", "jsonrpc.html#autotoc_md449", null ],
          [ "Example", "jsonrpc.html#autotoc_md453", null ]
        ] ],
        [ "iscsi_get_connections", "jsonrpc.html#rpc_iscsi_get_connections", [
          [ "Parameters", "jsonrpc.html#autotoc_md458", null ],
          [ "Response", "jsonrpc.html#autotoc_md459", null ],
          [ "Example", "jsonrpc.html#autotoc_md464", null ]
        ] ],
        [ "iscsi_get_stats", "jsonrpc.html#rpc_iscsi_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md466", null ],
          [ "Response", "jsonrpc.html#autotoc_md467", null ],
          [ "Example", "jsonrpc.html#autotoc_md471", null ]
        ] ],
        [ "iscsi_target_node_add_lun", "jsonrpc.html#rpc_iscsi_target_node_add_lun", [
          [ "Parameters", "jsonrpc.html#autotoc_md472", null ],
          [ "Example", "jsonrpc.html#autotoc_md474", null ]
        ] ],
        [ "iscsi_target_node_set_redirect", "jsonrpc.html#rpc_iscsi_target_node_set_redirect", [
          [ "Parameters", "jsonrpc.html#autotoc_md476", null ],
          [ "Example", "jsonrpc.html#autotoc_md478", null ]
        ] ],
        [ "iscsi_target_node_request_logout", "jsonrpc.html#rpc_iscsi_target_node_request_logout", [
          [ "Parameters", "jsonrpc.html#autotoc_md480", null ],
          [ "Example", "jsonrpc.html#autotoc_md481", null ]
        ] ],
        [ "iscsi_enable_histogram", "jsonrpc.html#rpc_iscsi_enable_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md482", null ],
          [ "Example", "jsonrpc.html#autotoc_md483", null ]
        ] ],
        [ "iscsi_get_histogram", "jsonrpc.html#rpc_iscsi_get_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md484", null ],
          [ "Response", "jsonrpc.html#autotoc_md485", null ],
          [ "Example", "jsonrpc.html#autotoc_md486", null ]
        ] ]
      ] ],
      [ "NVMe-oF Target", "jsonrpc.html#jsonrpc_components_nvmf_tgt", [
        [ "nvmf_create_transport", "jsonrpc.html#rpc_nvmf_create_transport", [
          [ "Parameters", "jsonrpc.html#autotoc_md487", null ],
          [ "Example", "jsonrpc.html#autotoc_md488", null ]
        ] ],
        [ "nvmf_get_subsystems", "jsonrpc.html#rpc_nvmf_get_subsystems", [
          [ "Parameters", "jsonrpc.html#autotoc_md489", null ],
          [ "Example", "jsonrpc.html#autotoc_md490", null ]
        ] ],
        [ "nvmf_create_subsystem", "jsonrpc.html#rpc_nvmf_create_subsystem", [
          [ "Parameters", "jsonrpc.html#autotoc_md491", null ],
          [ "Example", "jsonrpc.html#autotoc_md492", null ]
        ] ],
        [ "nvmf_delete_subsystem", "jsonrpc.html#rpc_nvmf_delete_subsystem", [
          [ "Parameters", "jsonrpc.html#autotoc_md493", null ],
          [ "Example", "jsonrpc.html#autotoc_md494", null ]
        ] ],
        [ "nvmf_subsystem_add_listener", "jsonrpc.html#rpc_nvmf_subsystem_add_listener", [
          [ "Parameters", "jsonrpc.html#autotoc_md495", [
            [ "listen_address", "jsonrpc.html#rpc_nvmf_listen_address", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md496", null ]
        ] ],
        [ "nvmf_subsystem_remove_listener", "jsonrpc.html#rpc_nvmf_subsystem_remove_listener", [
          [ "Parameters", "jsonrpc.html#autotoc_md497", null ],
          [ "Example", "jsonrpc.html#autotoc_md498", null ]
        ] ],
        [ "nvmf_subsystem_listener_set_ana_state", "jsonrpc.html#rpc_nvmf_subsystem_listener_set_ana_state", [
          [ "Parameters", "jsonrpc.html#autotoc_md499", null ],
          [ "Example", "jsonrpc.html#autotoc_md500", null ]
        ] ],
        [ "nvmf_subsystem_add_ns", "jsonrpc.html#rpc_nvmf_subsystem_add_ns", [
          [ "Parameters", "jsonrpc.html#autotoc_md501", [
            [ "namespace", "jsonrpc.html#rpc_nvmf_namespace", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md502", null ]
        ] ],
        [ "nvmf_subsystem_remove_ns", "jsonrpc.html#rpc_nvmf_subsystem_remove_ns", [
          [ "Parameters", "jsonrpc.html#autotoc_md503", null ],
          [ "Example", "jsonrpc.html#autotoc_md504", null ]
        ] ],
        [ "nvmf_subsystem_set_ns_ana_group", "jsonrpc.html#rpc_nvmf_subsystem_set_ns_ana_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md505", null ],
          [ "Example", "jsonrpc.html#autotoc_md506", null ]
        ] ],
        [ "nvmf_subsystem_add_host", "jsonrpc.html#rpc_nvmf_subsystem_add_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md507", null ],
          [ "Example", "jsonrpc.html#autotoc_md508", null ]
        ] ],
        [ "nvmf_subsystem_remove_host", "jsonrpc.html#rpc_nvmf_subsystem_remove_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md509", null ],
          [ "Example", "jsonrpc.html#autotoc_md510", null ]
        ] ],
        [ "nvmf_subsystem_allow_any_host", "jsonrpc.html#rpc_nvmf_subsystem_allow_any_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md511", null ],
          [ "Example", "jsonrpc.html#autotoc_md512", null ]
        ] ],
        [ "nvmf_subsystem_set_keys", "jsonrpc.html#rpc_nvmf_subsystem_set_keys", [
          [ "Parameters", "jsonrpc.html#autotoc_md513", null ],
          [ "Example", "jsonrpc.html#autotoc_md514", null ]
        ] ],
        [ "nvmf_subsystem_get_controllers", "jsonrpc.html#rpc_nvmf_subsystem_get_controllers", [
          [ "Parameters", "jsonrpc.html#autotoc_md515", null ],
          [ "Example", "jsonrpc.html#autotoc_md516", null ]
        ] ],
        [ "nvmf_subsystem_get_qpairs", "jsonrpc.html#rpc_nvmf_subsystem_get_qpairs", [
          [ "Parameters", "jsonrpc.html#autotoc_md517", null ],
          [ "Example", "jsonrpc.html#autotoc_md518", null ]
        ] ],
        [ "nvmf_subsystem_get_listeners", "jsonrpc.html#rpc_nvmf_subsystem_get_listeners", [
          [ "Parameters", "jsonrpc.html#autotoc_md519", null ],
          [ "Example", "jsonrpc.html#autotoc_md520", null ]
        ] ],
        [ "nvmf_ns_add_host", "jsonrpc.html#rpc_nvmf_ns_add_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md521", null ],
          [ "Example", "jsonrpc.html#autotoc_md522", null ]
        ] ],
        [ "nvmf_ns_remove_host", "jsonrpc.html#rpc_nvmf_ns_remove_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md523", null ],
          [ "Example", "jsonrpc.html#autotoc_md524", null ]
        ] ],
        [ "nvmf_set_max_subsystems", "jsonrpc.html#rpc_nvmf_set_max_subsystems", [
          [ "Parameters", "jsonrpc.html#autotoc_md525", null ],
          [ "Example", "jsonrpc.html#autotoc_md526", null ]
        ] ],
        [ "nvmf_discovery_add_referral", "jsonrpc.html#rpc_nvmf_discovery_add_referral", [
          [ "Parameters", "jsonrpc.html#autotoc_md527", null ],
          [ "Example", "jsonrpc.html#autotoc_md528", null ]
        ] ],
        [ "nvmf_discovery_remove_referral", "jsonrpc.html#rpc_nvmf_discovery_remove_referral", [
          [ "Parameters", "jsonrpc.html#autotoc_md529", null ],
          [ "Example", "jsonrpc.html#autotoc_md530", null ]
        ] ],
        [ "nvmf_discovery_get_referrals", "jsonrpc.html#rpc_nvmf_discovery_get_referrals", [
          [ "Parameters", "jsonrpc.html#autotoc_md531", null ],
          [ "Example", "jsonrpc.html#autotoc_md532", null ]
        ] ],
        [ "nvmf_set_config", "jsonrpc.html#rpc_nvmf_set_config", [
          [ "Parameters", "jsonrpc.html#autotoc_md533", [
            [ "admin_cmd_passthru", "jsonrpc.html#spdk_nvmf_admin_passthru_conf", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md534", null ]
        ] ],
        [ "nvmf_get_transports", "jsonrpc.html#rpc_nvmf_get_transports", [
          [ "Parameters", "jsonrpc.html#autotoc_md535", null ],
          [ "Example", "jsonrpc.html#autotoc_md536", null ]
        ] ],
        [ "nvmf_get_stats", "jsonrpc.html#rpc_nvmf_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md537", null ],
          [ "Response", "jsonrpc.html#autotoc_md538", null ],
          [ "Example", "jsonrpc.html#autotoc_md539", null ]
        ] ],
        [ "nvmf_set_crdt", "jsonrpc.html#rpc_nvmf_set_crdt", [
          [ "Parameters", "jsonrpc.html#autotoc_md540", null ]
        ] ]
      ] ],
      [ "Vfio-user Target", "jsonrpc.html#jsonrpc_components_vfu_tgt", [
        [ "vfu_tgt_set_base_path", "jsonrpc.html#rpc_vfu_tgt_set_base_path", [
          [ "Parameters", "jsonrpc.html#autotoc_md541", null ],
          [ "Example", "jsonrpc.html#autotoc_md542", null ]
        ] ],
        [ "vfu_virtio_delete_endpoint", "jsonrpc.html#rpc_vfu_virtio_delete_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md543", null ],
          [ "Example", "jsonrpc.html#autotoc_md544", null ]
        ] ],
        [ "vfu_virtio_create_blk_endpoint", "jsonrpc.html#rpc_vfu_virtio_create_blk_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md545", null ],
          [ "Example", "jsonrpc.html#autotoc_md546", null ]
        ] ],
        [ "vfu_virtio_scsi_add_target", "jsonrpc.html#rpc_vfu_virtio_scsi_add_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md547", null ],
          [ "Example", "jsonrpc.html#autotoc_md548", null ]
        ] ],
        [ "vfu_virtio_scsi_remove_target", "jsonrpc.html#rpc_vfu_virtio_scsi_remove_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md549", null ],
          [ "Example", "jsonrpc.html#autotoc_md550", null ]
        ] ],
        [ "vfu_virtio_create_scsi_endpoint", "jsonrpc.html#rpc_vfu_virtio_create_scsi_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md551", null ],
          [ "Example", "jsonrpc.html#autotoc_md552", null ]
        ] ],
        [ "vfu_virtio_create_fs_endpoint", "jsonrpc.html#rpc_vfu_virtio_create_fs_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md553", null ],
          [ "Example", "jsonrpc.html#autotoc_md554", null ]
        ] ]
      ] ],
      [ "Vhost Target", "jsonrpc.html#jsonrpc_components_vhost_tgt", [
        [ "vhost_controller_set_coalescing", "jsonrpc.html#rpc_vhost_controller_set_coalescing", [
          [ "Parameters", "jsonrpc.html#autotoc_md555", null ],
          [ "Example", "jsonrpc.html#autotoc_md556", null ]
        ] ],
        [ "vhost_create_scsi_controller", "jsonrpc.html#rpc_vhost_create_scsi_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md557", null ],
          [ "Example", "jsonrpc.html#autotoc_md558", null ]
        ] ],
        [ "vhost_start_scsi_controller", "jsonrpc.html#rpc_vhost_start_scsi_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md559", null ],
          [ "Example", "jsonrpc.html#autotoc_md560", null ]
        ] ],
        [ "vhost_scsi_controller_add_target", "jsonrpc.html#rpc_vhost_scsi_controller_add_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md561", null ],
          [ "Response", "jsonrpc.html#autotoc_md562", null ],
          [ "Example", "jsonrpc.html#autotoc_md563", null ]
        ] ],
        [ "vhost_scsi_controller_remove_target", "jsonrpc.html#rpc_vhost_scsi_controller_remove_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md564", null ],
          [ "Example", "jsonrpc.html#autotoc_md565", null ]
        ] ],
        [ "virtio_blk_create_transport", "jsonrpc.html#rpc_virtio_blk_create_transport", [
          [ "Parameters", "jsonrpc.html#autotoc_md566", null ],
          [ "Example", "jsonrpc.html#autotoc_md567", null ]
        ] ],
        [ "virtio_blk_get_transports", "jsonrpc.html#rpc_virtio_blk_get_transports", [
          [ "Parameters", "jsonrpc.html#autotoc_md568", null ],
          [ "Example", "jsonrpc.html#autotoc_md569", null ]
        ] ],
        [ "vhost_create_blk_controller", "jsonrpc.html#rpc_vhost_create_blk_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md570", null ],
          [ "Example", "jsonrpc.html#autotoc_md571", null ]
        ] ],
        [ "vhost_get_controllers", "jsonrpc.html#rpc_vhost_get_controllers", [
          [ "Parameters", "jsonrpc.html#autotoc_md572", null ],
          [ "Response", "jsonrpc.html#autotoc_md573", [
            [ "Vhost block", "jsonrpc.html#rpc_vhost_get_controllers_blk", null ],
            [ "Vhost SCSI", "jsonrpc.html#rpc_vhost_get_controllers_scsi", null ],
            [ "Vhost SCSI LUN", "jsonrpc.html#rpc_vhost_get_controllers_scsi_luns", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md574", null ]
        ] ],
        [ "vhost_delete_controller", "jsonrpc.html#rpc_vhost_delete_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md575", null ],
          [ "Example", "jsonrpc.html#autotoc_md576", null ]
        ] ]
      ] ],
      [ "Logical Volume", "jsonrpc.html#jsonrpc_components_lvol", [
        [ "bdev_lvol_create_lvstore", "jsonrpc.html#rpc_bdev_lvol_create_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md577", null ],
          [ "Response", "jsonrpc.html#autotoc_md578", null ],
          [ "Example", "jsonrpc.html#autotoc_md579", null ]
        ] ],
        [ "bdev_lvol_delete_lvstore", "jsonrpc.html#rpc_bdev_lvol_delete_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md580", null ],
          [ "Example", "jsonrpc.html#autotoc_md581", null ]
        ] ],
        [ "bdev_lvol_get_lvstores", "jsonrpc.html#rpc_bdev_lvol_get_lvstores", [
          [ "Parameters", "jsonrpc.html#autotoc_md582", null ],
          [ "Example", "jsonrpc.html#autotoc_md583", null ]
        ] ],
        [ "bdev_lvol_rename_lvstore", "jsonrpc.html#rpc_bdev_lvol_rename_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md584", null ],
          [ "Example", "jsonrpc.html#autotoc_md585", null ]
        ] ],
        [ "bdev_lvol_grow_lvstore", "jsonrpc.html#rpc_bdev_lvol_grow_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md586", null ],
          [ "Example", "jsonrpc.html#autotoc_md587", null ]
        ] ],
        [ "bdev_lvol_create", "jsonrpc.html#rpc_bdev_lvol_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md588", null ],
          [ "Response", "jsonrpc.html#autotoc_md589", null ],
          [ "Example", "jsonrpc.html#autotoc_md590", null ]
        ] ],
        [ "bdev_lvol_snapshot", "jsonrpc.html#rpc_bdev_lvol_snapshot", [
          [ "Parameters", "jsonrpc.html#autotoc_md591", null ],
          [ "Response", "jsonrpc.html#autotoc_md592", null ],
          [ "Example", "jsonrpc.html#autotoc_md593", null ]
        ] ],
        [ "bdev_lvol_clone", "jsonrpc.html#rpc_bdev_lvol_clone", [
          [ "Parameters", "jsonrpc.html#autotoc_md594", null ],
          [ "Response", "jsonrpc.html#autotoc_md595", null ],
          [ "Example", "jsonrpc.html#autotoc_md596", null ]
        ] ],
        [ "bdev_lvol_clone_bdev", "jsonrpc.html#rpc_bdev_lvol_clone_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md597", null ],
          [ "Response", "jsonrpc.html#autotoc_md598", null ],
          [ "Example", "jsonrpc.html#autotoc_md599", null ]
        ] ],
        [ "bdev_lvol_rename", "jsonrpc.html#rpc_bdev_lvol_rename", [
          [ "Parameters", "jsonrpc.html#autotoc_md600", null ],
          [ "Example", "jsonrpc.html#autotoc_md601", null ]
        ] ],
        [ "bdev_lvol_resize", "jsonrpc.html#rpc_bdev_lvol_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md602", null ],
          [ "Example", "jsonrpc.html#autotoc_md603", null ]
        ] ],
        [ "bdev_lvol_set_read_only", "jsonrpc.html#rpc_bdev_lvol_set_read_only", [
          [ "Parameters", "jsonrpc.html#autotoc_md604", null ],
          [ "Example", "jsonrpc.html#autotoc_md605", null ]
        ] ],
        [ "bdev_lvol_delete", "jsonrpc.html#rpc_bdev_lvol_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md606", null ],
          [ "Example", "jsonrpc.html#autotoc_md607", null ]
        ] ],
        [ "bdev_lvol_inflate", "jsonrpc.html#rpc_bdev_lvol_inflate", [
          [ "Parameters", "jsonrpc.html#autotoc_md608", null ],
          [ "Example", "jsonrpc.html#autotoc_md609", null ]
        ] ],
        [ "bdev_lvol_decouple_parent", "jsonrpc.html#rpc_bdev_lvol_decouple_parent", [
          [ "Parameters", "jsonrpc.html#autotoc_md610", null ],
          [ "Example", "jsonrpc.html#autotoc_md611", null ]
        ] ],
        [ "bdev_lvol_get_lvols", "jsonrpc.html#rpc_bdev_lvol_get_lvols", [
          [ "Parameters", "jsonrpc.html#autotoc_md612", null ],
          [ "Example", "jsonrpc.html#autotoc_md613", null ]
        ] ],
        [ "bdev_lvol_set_parent", "jsonrpc.html#rpc_bdev_lvol_set_parent", [
          [ "Parameters", "jsonrpc.html#autotoc_md614", null ],
          [ "Example", "jsonrpc.html#autotoc_md615", null ]
        ] ],
        [ "bdev_lvol_set_parent_bdev", "jsonrpc.html#rpc_bdev_lvol_set_parent_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md616", null ],
          [ "Example", "jsonrpc.html#autotoc_md617", null ]
        ] ],
        [ "bdev_lvol_start_shallow_copy", "jsonrpc.html#rpc_bdev_lvol_start_shallow_copy", [
          [ "Parameters", "jsonrpc.html#autotoc_md618", null ],
          [ "Response", "jsonrpc.html#autotoc_md619", null ],
          [ "Example", "jsonrpc.html#autotoc_md620", null ]
        ] ],
        [ "bdev_lvol_check_shallow_copy", "jsonrpc.html#rpc_bdev_lvol_check_shallow_copy", [
          [ "Parameters", "jsonrpc.html#autotoc_md621", null ],
          [ "Response", "jsonrpc.html#autotoc_md622", null ],
          [ "Example", "jsonrpc.html#autotoc_md623", null ]
        ] ]
      ] ],
      [ "RAID", "jsonrpc.html#jsonrpc_components_raid", [
        [ "bdev_raid_set_options", "jsonrpc.html#rpc_bdev_raid_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md624", null ],
          [ "Example", "jsonrpc.html#autotoc_md625", null ]
        ] ],
        [ "bdev_raid_get_bdevs", "jsonrpc.html#rpc_bdev_raid_get_bdevs", [
          [ "Parameters", "jsonrpc.html#autotoc_md626", null ],
          [ "Example", "jsonrpc.html#autotoc_md627", null ]
        ] ],
        [ "bdev_raid_create", "jsonrpc.html#rpc_bdev_raid_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md628", null ],
          [ "Example", "jsonrpc.html#autotoc_md629", null ]
        ] ],
        [ "bdev_raid_delete", "jsonrpc.html#rpc_bdev_raid_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md630", null ],
          [ "Example", "jsonrpc.html#autotoc_md631", null ]
        ] ],
        [ "bdev_raid_add_base_bdev", "jsonrpc.html#rpc_bdev_raid_add_base_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md632", null ],
          [ "Example", "jsonrpc.html#autotoc_md633", null ]
        ] ],
        [ "bdev_raid_remove_base_bdev", "jsonrpc.html#rpc_bdev_raid_remove_base_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md634", null ],
          [ "Example", "jsonrpc.html#autotoc_md635", null ]
        ] ]
      ] ],
      [ "SPLIT", "jsonrpc.html#jsonrpc_components_split", [
        [ "bdev_split_create", "jsonrpc.html#rpc_bdev_split_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md636", null ],
          [ "Example", "jsonrpc.html#autotoc_md637", null ]
        ] ],
        [ "bdev_split_delete", "jsonrpc.html#rpc_bdev_split_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md638", null ],
          [ "Example", "jsonrpc.html#autotoc_md639", null ]
        ] ]
      ] ],
      [ "Uring", "jsonrpc.html#jsonrpc_components_uring", [
        [ "bdev_uring_create", "jsonrpc.html#rpc_bdev_uring_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md640", null ],
          [ "Example", "jsonrpc.html#autotoc_md641", null ]
        ] ],
        [ "bdev_uring_rescan", "jsonrpc.html#rpc_bdev_uring_rescan", [
          [ "Parameters", "jsonrpc.html#autotoc_md642", null ],
          [ "Example", "jsonrpc.html#autotoc_md643", null ]
        ] ],
        [ "bdev_uring_delete", "jsonrpc.html#rpc_bdev_uring_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md644", null ],
          [ "Example", "jsonrpc.html#autotoc_md645", null ]
        ] ]
      ] ],
      [ "OPAL", "jsonrpc.html#jsonrpc_components_opal", [
        [ "bdev_nvme_opal_init", "jsonrpc.html#rpc_bdev_nvme_opal_init", [
          [ "Parameters", "jsonrpc.html#autotoc_md646", null ],
          [ "Example", "jsonrpc.html#autotoc_md647", null ]
        ] ],
        [ "bdev_nvme_opal_revert", "jsonrpc.html#rpc_bdev_nvme_opal_revert", [
          [ "Parameters", "jsonrpc.html#autotoc_md648", null ],
          [ "Example", "jsonrpc.html#autotoc_md649", null ]
        ] ],
        [ "bdev_opal_create", "jsonrpc.html#rpc_bdev_opal_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md650", null ],
          [ "Response", "jsonrpc.html#autotoc_md651", null ],
          [ "Example", "jsonrpc.html#autotoc_md652", null ]
        ] ],
        [ "bdev_opal_get_info", "jsonrpc.html#rpc_bdev_opal_get_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md653", null ],
          [ "Response", "jsonrpc.html#autotoc_md654", null ],
          [ "Example", "jsonrpc.html#autotoc_md655", null ]
        ] ],
        [ "bdev_opal_delete", "jsonrpc.html#rpc_bdev_opal_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md656", null ],
          [ "Example", "jsonrpc.html#autotoc_md657", null ]
        ] ],
        [ "bdev_opal_new_user", "jsonrpc.html#rpc_bdev_opal_new_user", [
          [ "Parameters", "jsonrpc.html#autotoc_md658", null ],
          [ "Example", "jsonrpc.html#autotoc_md659", null ]
        ] ],
        [ "bdev_opal_set_lock_state", "jsonrpc.html#rpc_bdev_opal_set_lock_state", [
          [ "Parameters", "jsonrpc.html#autotoc_md660", null ],
          [ "Example", "jsonrpc.html#autotoc_md661", null ]
        ] ]
      ] ],
      [ "Notifications", "jsonrpc.html#jsonrpc_components_notify", [
        [ "notify_get_types", "jsonrpc.html#rpc_notify_get_types", [
          [ "Parameters", "jsonrpc.html#autotoc_md662", null ],
          [ "Response", "jsonrpc.html#autotoc_md663", null ],
          [ "Example", "jsonrpc.html#autotoc_md664", null ]
        ] ],
        [ "notify_get_notifications", "jsonrpc.html#rpc_notify_get_notifications", [
          [ "Parameters", "jsonrpc.html#autotoc_md665", null ],
          [ "Response", "jsonrpc.html#autotoc_md666", null ],
          [ "Example", "jsonrpc.html#autotoc_md667", null ]
        ] ]
      ] ],
      [ "Keyring", "jsonrpc.html#jsonrpc_components_keyring", [
        [ "keyring_file_add_key", "jsonrpc.html#rpc_keyring_file_add_key", [
          [ "Parameters", "jsonrpc.html#autotoc_md668", null ],
          [ "Example", "jsonrpc.html#autotoc_md669", null ]
        ] ],
        [ "keyring_file_remove_key", "jsonrpc.html#rpc_keyring_file_remove_key", [
          [ "Parameters", "jsonrpc.html#autotoc_md670", null ],
          [ "Example", "jsonrpc.html#autotoc_md671", null ]
        ] ],
        [ "keyring_get_keys", "jsonrpc.html#rpc_keyring_get_keys", [
          [ "Parameters", "jsonrpc.html#autotoc_md672", null ],
          [ "Example", "jsonrpc.html#autotoc_md673", null ]
        ] ],
        [ "keyring_linux_set_options", "jsonrpc.html#rpc_keyring_linux_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md674", null ],
          [ "Example", "jsonrpc.html#autotoc_md675", null ]
        ] ]
      ] ],
      [ "Linux Userspace Block Device (UBLK)", "jsonrpc.html#jsonrpc_components_ublk", [
        [ "ublk_create_target", "jsonrpc.html#rpc_ublk_create_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md676", null ],
          [ "Response", "jsonrpc.html#autotoc_md677", null ],
          [ "Example", "jsonrpc.html#autotoc_md678", null ]
        ] ],
        [ "ublk_destroy_target", "jsonrpc.html#rpc_ublk_destroy_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md679", null ],
          [ "Response", "jsonrpc.html#autotoc_md680", null ],
          [ "Example", "jsonrpc.html#autotoc_md681", null ]
        ] ],
        [ "ublk_start_disk", "jsonrpc.html#rpc_ublk_start_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md682", null ],
          [ "Response", "jsonrpc.html#autotoc_md683", null ],
          [ "Example", "jsonrpc.html#autotoc_md684", null ]
        ] ],
        [ "ublk_recover_disk", "jsonrpc.html#rpc_ublk_recover_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md701", null ],
          [ "Response", "jsonrpc.html#autotoc_md702", null ],
          [ "Example", "jsonrpc.html#autotoc_md703", null ]
        ] ],
        [ "ublk_stop_disk", "jsonrpc.html#rpc_ublk_stop_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md704", null ],
          [ "Response", "jsonrpc.html#autotoc_md705", null ],
          [ "Example", "jsonrpc.html#autotoc_md706", null ]
        ] ],
        [ "ublk_get_disks", "jsonrpc.html#rpc_ublk_get_disks", [
          [ "Parameters", "jsonrpc.html#autotoc_md707", null ],
          [ "Response", "jsonrpc.html#autotoc_md708", null ],
          [ "Example", "jsonrpc.html#autotoc_md709", null ]
        ] ]
      ] ],
      [ "Linux Network Block Device (NBD)", "jsonrpc.html#jsonrpc_components_nbd", [
        [ "nbd_start_disk", "jsonrpc.html#rpc_nbd_start_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md710", null ],
          [ "Response", "jsonrpc.html#autotoc_md711", null ],
          [ "Example", "jsonrpc.html#autotoc_md712", null ]
        ] ],
        [ "nbd_stop_disk", "jsonrpc.html#rpc_nbd_stop_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md737", null ],
          [ "Example", "jsonrpc.html#autotoc_md738", null ]
        ] ],
        [ "nbd_get_disks", "jsonrpc.html#rpc_nbd_get_disks", [
          [ "Parameters", "jsonrpc.html#autotoc_md740", null ],
          [ "Response", "jsonrpc.html#autotoc_md743", null ],
          [ "Example", "jsonrpc.html#autotoc_md744", null ]
        ] ]
      ] ],
      [ "Socket layer", "jsonrpc.html#jsonrpc_components_sock", [
        [ "sock_impl_get_options", "jsonrpc.html#rpc_sock_impl_get_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md747", null ],
          [ "Response", "jsonrpc.html#autotoc_md749", null ],
          [ "Example", "jsonrpc.html#autotoc_md750", null ]
        ] ],
        [ "sock_impl_set_options", "jsonrpc.html#rpc_sock_impl_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md751", null ],
          [ "Response", "jsonrpc.html#autotoc_md752", null ],
          [ "Example", "jsonrpc.html#autotoc_md753", null ]
        ] ],
        [ "sock_set_default_impl", "jsonrpc.html#rpc_sock_set_default_impl", [
          [ "Parameters", "jsonrpc.html#autotoc_md754", null ],
          [ "Response", "jsonrpc.html#autotoc_md755", null ],
          [ "Example", "jsonrpc.html#autotoc_md756", null ]
        ] ],
        [ "sock_get_default_impl", "jsonrpc.html#rpc_sock_get_default_impl", [
          [ "Parameters", "jsonrpc.html#autotoc_md757", null ],
          [ "Response", "jsonrpc.html#autotoc_md758", null ],
          [ "Example", "jsonrpc.html#autotoc_md759", null ]
        ] ]
      ] ],
      [ "Miscellaneous RPC commands", "jsonrpc.html#jsonrpc_components_misc", [
        [ "bdev_nvme_send_cmd", "jsonrpc.html#rpc_bdev_nvme_send_cmd", [
          [ "Parameters", "jsonrpc.html#autotoc_md760", null ],
          [ "Response", "jsonrpc.html#autotoc_md761", null ],
          [ "Example", "jsonrpc.html#autotoc_md762", null ]
        ] ],
        [ "vmd_enable", "jsonrpc.html#rpc_vmd_enable", [
          [ "Parameters", "jsonrpc.html#autotoc_md763", null ],
          [ "Response", "jsonrpc.html#autotoc_md764", null ],
          [ "Example", "jsonrpc.html#autotoc_md765", null ]
        ] ],
        [ "vmd_remove_device", "jsonrpc.html#rpc_vmd_remove_device", [
          [ "Parameters", "jsonrpc.html#autotoc_md766", null ],
          [ "Example", "jsonrpc.html#autotoc_md767", null ]
        ] ],
        [ "vmd_rescan", "jsonrpc.html#rpc_vmd_rescan", [
          [ "Parameters", "jsonrpc.html#autotoc_md768", null ],
          [ "Response", "jsonrpc.html#autotoc_md769", null ],
          [ "Example", "jsonrpc.html#autotoc_md770", null ]
        ] ],
        [ "spdk_get_version", "jsonrpc.html#rpc_spdk_get_version", [
          [ "Parameters", "jsonrpc.html#autotoc_md771", null ],
          [ "Response", "jsonrpc.html#autotoc_md772", null ],
          [ "Example", "jsonrpc.html#autotoc_md773", null ]
        ] ],
        [ "framework_get_pci_devices", "jsonrpc.html#rpc_framework_get_pci_devices", [
          [ "Parameters", "jsonrpc.html#autotoc_md774", null ],
          [ "Response", "jsonrpc.html#autotoc_md775", null ],
          [ "Example", "jsonrpc.html#autotoc_md776", null ]
        ] ],
        [ "bdev_nvme_add_error_injection", "jsonrpc.html#rpc_bdev_nvme_add_error_injection", [
          [ "Parameters", "jsonrpc.html#autotoc_md777", null ],
          [ "Response", "jsonrpc.html#autotoc_md778", null ],
          [ "Example", "jsonrpc.html#autotoc_md779", null ]
        ] ],
        [ "bdev_nvme_remove_error_injection", "jsonrpc.html#rpc_bdev_nvme_remove_error_injection", [
          [ "Parameters", "jsonrpc.html#autotoc_md780", null ],
          [ "Response", "jsonrpc.html#autotoc_md781", null ],
          [ "Example", "jsonrpc.html#autotoc_md782", null ]
        ] ],
        [ "bdev_daos_create", "jsonrpc.html#rpc_bdev_daos_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md783", null ],
          [ "Response", "jsonrpc.html#autotoc_md784", null ],
          [ "Example", "jsonrpc.html#autotoc_md785", null ]
        ] ],
        [ "bdev_daos_delete", "jsonrpc.html#rpc_bdev_daos_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md786", null ],
          [ "Example", "jsonrpc.html#autotoc_md787", null ]
        ] ],
        [ "bdev_daos_resize", "jsonrpc.html#rpc_bdev_daos_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md788", null ],
          [ "Example", "jsonrpc.html#autotoc_md789", null ]
        ] ],
        [ "iobuf_set_options", "jsonrpc.html#rpc_iobuf_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md790", null ],
          [ "Example", "jsonrpc.html#autotoc_md791", null ]
        ] ],
        [ "iobuf_get_stats", "jsonrpc.html#rpc_iobuf_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md792", null ],
          [ "Example", "jsonrpc.html#autotoc_md793", null ]
        ] ],
        [ "bdev_nvme_start_mdns_discovery", "jsonrpc.html#rpc_bdev_nvme_start_mdns_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md794", null ],
          [ "Example", "jsonrpc.html#autotoc_md795", null ]
        ] ],
        [ "bdev_nvme_stop_mdns_discovery", "jsonrpc.html#rpc_bdev_nvme_stop_mdns_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md796", null ],
          [ "Example", "jsonrpc.html#autotoc_md797", null ]
        ] ],
        [ "bdev_nvme_get_mdns_discovery_info", "jsonrpc.html#rpc_bdev_nvme_get_mdns_discovery_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md798", null ],
          [ "Example", "jsonrpc.html#autotoc_md799", null ]
        ] ],
        [ "nvmf_publish_mdns_prr", "jsonrpc.html#rpc_nvmf_publish_mdns_prr", [
          [ "Parameters", "jsonrpc.html#autotoc_md800", null ],
          [ "Example", "jsonrpc.html#autotoc_md801", null ]
        ] ],
        [ "nvmf_stop_mdns_prr", "jsonrpc.html#rpc_nvmf_stop_mdns_prr", [
          [ "Parameters", "jsonrpc.html#autotoc_md802", null ],
          [ "Example", "jsonrpc.html#autotoc_md803", null ]
        ] ]
      ] ],
      [ "fsdev", "jsonrpc.html#jsonrpc_components_fsdev", [
        [ "fsdev_get_opts", "jsonrpc.html#rpc_fsdev_get_opts", [
          [ "Parameters", "jsonrpc.html#autotoc_md804", null ],
          [ "Example", "jsonrpc.html#autotoc_md805", null ]
        ] ],
        [ "fsdev_set_opts", "jsonrpc.html#rpc_fsdev_set_opts", [
          [ "Parameters", "jsonrpc.html#autotoc_md806", null ],
          [ "Example", "jsonrpc.html#autotoc_md807", null ]
        ] ],
        [ "fsdev_aio_create", "jsonrpc.html#rpc_fsdev_aio_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md808", null ],
          [ "Example", "jsonrpc.html#autotoc_md809", null ]
        ] ],
        [ "fsdev_aio_delete", "jsonrpc.html#rpc_fsdev_aio_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md810", null ],
          [ "Example", "jsonrpc.html#autotoc_md811", null ]
        ] ]
      ] ]
    ] ],
    [ "JSON-RPC Remote access", "jsonrpc_proxy.html", [
      [ "Parameters", "jsonrpc_proxy.html#autotoc_md879", null ],
      [ "Example usage", "jsonrpc_proxy.html#autotoc_md880", null ],
      [ "Returns", "jsonrpc_proxy.html#autotoc_md881", null ],
      [ "Client side", "jsonrpc_proxy.html#autotoc_md882", null ]
    ] ],
    [ "Userspace DTrace (USDT)", "usdt.html", [
      [ "Building bpftrace", "usdt.html#autotoc_md1453", null ],
      [ "bpftrace.sh", "usdt.html#autotoc_md1454", null ],
      [ "Configuring SPDK Build", "usdt.html#autotoc_md1455", null ],
      [ "Start SPDK application and bpftrace script", "usdt.html#autotoc_md1456", null ],
      [ "TODOs and known limitations", "usdt.html#autotoc_md1457", null ]
    ] ],
    [ "Tracing Framework", "tracepoints.html", [
      [ "Introduction", "tracepoints.html#tracepoints_intro", null ],
      [ "Enabling Tracepoints", "tracepoints.html#enable_tracepoints", [
        [ "Enabling Tracepoints in Groups", "tracepoints.html#autotoc_md1447", null ],
        [ "Enabling Individual Tracepoints", "tracepoints.html#autotoc_md1449", null ],
        [ "Combining Tracepoint Masks", "tracepoints.html#autotoc_md1450", null ],
        [ "Tracepoint Group Names", "tracepoints.html#autotoc_md1451", null ],
        [ "Starting the SPDK Target", "tracepoints.html#autotoc_md1452", null ]
      ] ],
      [ "Capturing a snapshot of events", "tracepoints.html#capture_tracepoints", null ],
      [ "Capturing sufficient trace events", "tracepoints.html#capture_trace_events", null ],
      [ "Clearing Trace History", "tracepoints.html#clear_trace_history", null ],
      [ "Querying Tracepoint Status", "tracepoints.html#query_tpoint_status", null ],
      [ "Adding New Tracepoints", "tracepoints.html#add_tracepoints", null ]
    ] ],
    [ "NVMe Multipath", "nvme_multipath.html", [
      [ "Introduction", "nvme_multipath.html#autotoc_md862", null ],
      [ "Design", "nvme_multipath.html#autotoc_md863", [
        [ "Multipath Mode", "nvme_multipath.html#autotoc_md864", null ],
        [ "Path Error Recovery", "nvme_multipath.html#autotoc_md865", null ],
        [ "Path Selection", "nvme_multipath.html#autotoc_md866", null ],
        [ "I/O Retry", "nvme_multipath.html#autotoc_md867", null ],
        [ "Asymmetric Namespace Accesses (ANA) Handling", "nvme_multipath.html#autotoc_md868", null ],
        [ "I/O Timeout", "nvme_multipath.html#autotoc_md869", null ]
      ] ],
      [ "Usage", "nvme_multipath.html#autotoc_md883", null ],
      [ "Limitations", "nvme_multipath.html#autotoc_md887", null ]
    ] ],
    [ "NVMe-oF Multipath HOWTO", "nvmf_multipath_howto.html", [
      [ "Build SPDK on both the initiator and target servers", "nvmf_multipath_howto.html#autotoc_md1428", null ],
      [ "Setup hugepages", "nvmf_multipath_howto.html#autotoc_md1429", null ],
      [ "On target: start and configure SPDK", "nvmf_multipath_howto.html#autotoc_md1430", null ],
      [ "On initiator: start and configure bdevperf", "nvmf_multipath_howto.html#autotoc_md1431", null ],
      [ "Launch a bdevperf test", "nvmf_multipath_howto.html#autotoc_md1432", null ],
      [ "Switching paths", "nvmf_multipath_howto.html#autotoc_md1433", null ],
      [ "Use round-robin (active_active) path load balancing", "nvmf_multipath_howto.html#autotoc_md1434", null ]
    ] ],
    [ "Storage Management Agent", "sma.html", [
      [ "Interface", "sma.html#autotoc_md1414", [
        [ "CreateDevice", "sma.html#autotoc_md1415", null ],
        [ "DeleteDevice", "sma.html#autotoc_md1416", null ],
        [ "AttachVolume", "sma.html#autotoc_md1417", null ],
        [ "DetachVolume", "sma.html#autotoc_md1418", null ],
        [ "SetQos", "sma.html#autotoc_md1419", null ],
        [ "GetQosCapabilities", "sma.html#autotoc_md1420", null ]
      ] ],
      [ "Running and Configuration", "sma.html#autotoc_md1421", null ],
      [ "Plugins", "sma.html#autotoc_md1422", null ]
    ] ],
    [ "ublk Target", "ublk.html", [
      [ "Table of Contents", "ublk.html#ublk_toc", null ],
      [ "Introduction", "ublk.html#ublk_intro", null ],
      [ "ublk Internal", "ublk.html#ublk_internal", [
        [ "Control Plane", "ublk.html#autotoc_md1423", null ],
        [ "Data Plane", "ublk.html#autotoc_md1424", null ]
      ] ],
      [ "SPDK Implementation", "ublk.html#ublk_impl", null ],
      [ "Operation", "ublk.html#ublk_op", [
        [ "Enabling SPDK ublk target", "ublk.html#autotoc_md1425", null ],
        [ "Creating ublk block device", "ublk.html#autotoc_md1426", null ],
        [ "Deleting ublk block device and exit", "ublk.html#autotoc_md1427", null ]
      ] ]
    ] ]
];